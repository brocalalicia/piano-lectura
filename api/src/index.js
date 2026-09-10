import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import * as consultas from "./consultas.js";
import { conMedias } from "./estadisticas.js";

const aqui = path.dirname(fileURLToPath(import.meta.url));

// La cadena de conexion y la clave de profesora las pone Coolify como variables
// de entorno: no viven en el repositorio.
const { DATABASE_URL, CLAVE_PROFESORA, PORT = 3000, ORIGEN_PERMITIDO } = process.env;
if (!DATABASE_URL) throw new Error("Falta DATABASE_URL");
if (!CLAVE_PROFESORA) throw new Error("Falta CLAVE_PROFESORA");

const db = new pg.Pool({ connectionString: DATABASE_URL });

// El esquema se aplica al arrancar. Todas las sentencias son idempotentes, asi
// que reiniciar el servicio no rompe nada.
await db.query(fs.readFileSync(path.join(aqui, "..", "esquema.sql"), "utf8"));

const app = express();
app.use(express.json({ limit: "16kb" }));

// La app se sirve desde otro dominio, asi que hace falta CORS. Si se declara
// ORIGEN_PERMITIDO solo se acepta ese; si no, cualquiera.
app.use((req, res, siguiente) => {
  res.set("Access-Control-Allow-Origin", ORIGEN_PERMITIDO || "*");
  res.set("Access-Control-Allow-Headers", "Content-Type, X-Clave-Profesora");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  return siguiente();
});

const fallo = (res, codigo, mensaje) => res.status(codigo).json({ error: mensaje });

// Envuelve una ruta para que un error de base de datos devuelva 500 y quede en
// el registro, en vez de tumbar el proceso.
const ruta = (mano) => (req, res) =>
  Promise.resolve(mano(req, res)).catch((error) => {
    console.error(req.method, req.path, error);
    if (!res.headersSent) fallo(res, 500, "Error del servidor");
  });

app.get("/api/salud", ruta(async (_req, res) => {
  await db.query("SELECT 1");
  res.json({ estado: "bien" });
}));

// --- Alumno ---------------------------------------------------------------

const conAlumno = (mano) => ruta(async (req, res) => {
  const alumno = await consultas.alumnoPorCodigo(db, String(req.params.codigo || "").trim());
  if (!alumno) return fallo(res, 404, "Código no encontrado");
  return mano(req, res, alumno);
});

app.get("/api/alumno/:codigo", conAlumno(async (_req, res, alumno) => {
  res.json({ nombre: alumno.nombre, cursos: await consultas.cursosAbiertos(db, alumno.id) });
}));

app.get("/api/alumno/:codigo/progreso", conAlumno(async (_req, res, alumno) => {
  res.json({
    nombre: alumno.nombre,
    cursos: await consultas.cursosAbiertos(db, alumno.id),
    ...(await progresoDe(alumno.id)),
  });
}));

async function progresoDe(alumnoId, limiteSesiones = 50) {
  const [sesiones, marcas, lecciones, cursos, porDia] = await Promise.all([
    consultas.sesionesDe(db, alumnoId, limiteSesiones),
    consultas.mejoresMarcas(db, alumnoId),
    consultas.aperturasPorLeccion(db, alumnoId),
    consultas.aperturasPorCurso(db, alumnoId),
    consultas.aperturasPorDia(db, alumnoId),
  ]);
  return {
    sesiones,
    marcas,
    lecciones: conMedias(lecciones),
    cursos: conMedias(cursos),
    aperturasPorDia: porDia,
  };
}

const ENTERO = (v) => (Number.isInteger(v) && v >= 0 ? v : null);

app.post("/api/alumno/:codigo/sesion", conAlumno(async (req, res, alumno) => {
  const s = req.body || {};
  const datos = {
    clave: String(s.clave || ""),
    nivel: String(s.nivel || ""),
    aciertos: ENTERO(s.aciertos),
    fallos: ENTERO(s.fallos),
    rachaMaxima: ENTERO(s.rachaMaxima),
    duracionMs: ENTERO(s.duracionMs),
    estrellas: ENTERO(s.estrellas),
  };
  const incompleto = !datos.clave || !datos.nivel || Object.values(datos).some((v) => v === null);
  if (incompleto) return fallo(res, 400, "Sesión incompleta");
  res.json(await consultas.guardarSesion(db, alumno.id, datos));
}));

app.post("/api/alumno/:codigo/apertura", conAlumno(async (req, res, alumno) => {
  const { nivel, curso, leccion } = req.body || {};
  if (!nivel || !leccion || !Number.isInteger(curso)) return fallo(res, 400, "Apertura incompleta");
  await consultas.registrarApertura(db, alumno.id, String(nivel), curso, String(leccion));
  res.json({ guardado: true });
}));

// --- Profesora ------------------------------------------------------------

// Comparacion en tiempo constante: con "===" se puede adivinar la clave letra a
// letra midiendo lo que tarda en responder.
function claveValida(dada) {
  const a = Buffer.from(String(dada || ""));
  const b = Buffer.from(CLAVE_PROFESORA);
  if (a.length !== b.length) return false;
  let diferencia = 0;
  for (let i = 0; i < a.length; i += 1) diferencia |= a[i] ^ b[i];
  return diferencia === 0;
}

const soloProfesora = (mano) => ruta(async (req, res) => {
  if (!claveValida(req.get("X-Clave-Profesora"))) return fallo(res, 401, "Clave incorrecta");
  return mano(req, res);
});

app.get("/api/profesora/alumnos", soloProfesora(async (_req, res) => {
  res.json(await consultas.resumenAlumnos(db));
}));

app.get("/api/profesora/alumno/:codigo", soloProfesora(async (req, res) => {
  const alumno = await consultas.alumnoPorCodigo(db, req.params.codigo);
  if (!alumno) return fallo(res, 404, "No encontrado");
  res.json({
    ...alumno,
    cursos: await consultas.cursosAbiertos(db, alumno.id),
    ...(await progresoDe(alumno.id, 200)),
  });
}));

// La profesora abre y cierra cursos a mano. "hasta" abre del 1 al que se diga,
// que es como se usa en clase; "curso" abre o cierra uno suelto.
app.post("/api/profesora/alumno/:codigo/acceso", soloProfesora(async (req, res) => {
  const alumno = await consultas.alumnoPorCodigo(db, req.params.codigo);
  if (!alumno) return fallo(res, 404, "No encontrado");

  const { nivel, curso, hasta, abierto = true } = req.body || {};
  if (!nivel) return fallo(res, 400, "Falta el nivel");

  if (Number.isInteger(hasta)) {
    await consultas.abrirHasta(db, alumno.id, String(nivel), hasta);
  } else if (Number.isInteger(curso)) {
    const cambiar = abierto ? consultas.abrirCurso : consultas.cerrarCurso;
    await cambiar(db, alumno.id, String(nivel), curso);
  } else {
    return fallo(res, 400, "Hace falta «curso» o «hasta»");
  }

  res.json({ cursos: await consultas.cursosAbiertos(db, alumno.id) });
}));

// El codigo se genera aqui, no lo escribe la profesora: asi no acaban siendo
// todos "marta" o "1234".
const CODIGO_LETRAS = "abcdefghijkmnpqrstuvwxyz23456789";
const nuevoCodigo = () =>
  Array.from({ length: 8 }, () => CODIGO_LETRAS[Math.floor(Math.random() * CODIGO_LETRAS.length)]).join("");

app.post("/api/profesora/alumnos", soloProfesora(async (req, res) => {
  const { nombre: crudo, nivel, hasta } = req.body || {};
  const nombre = String(crudo || "").trim();
  if (!nombre) return fallo(res, 400, "Hace falta el nombre");

  const alumno = await consultas.crearAlumno(db, nombre, nuevoCodigo());
  // Un alumno recien dado de alta no sirve de nada con todo cerrado, asi que
  // se le puede abrir de entrada hasta el curso que diga la profesora.
  if (nivel && Number.isInteger(hasta)) {
    await consultas.abrirHasta(db, alumno.id, String(nivel), hasta);
  }
  res.json({ ...alumno, cursos: await consultas.cursosAbiertos(db, alumno.id) });
}));

app.listen(Number(PORT), () => console.log(`API escuchando en el puerto ${PORT}`));
