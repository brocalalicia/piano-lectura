// Cliente de la API de progreso.
//
// Regla de oro: nada de aqui puede romper la app. Si no hay servidor, si el
// alumno no ha metido codigo o si la red falla, todo devuelve null y la app
// sigue funcionando exactamente como antes, sin guardar nada. Por eso ninguna
// funcion lanza excepciones.

// La direccion se fija al construir, con VITE_API. Sin ella, la app funciona
// sola y no habla con ningun servidor.
const BASE = String(import.meta.env.VITE_API || "").replace(/\/+$/, "");

const CODIGO_GUARDADO = "piano-lectura-codigo";
const CLAVE_GUARDADA = "piano-lectura-clave-profesora";

export const hayServidor = () => Boolean(BASE);

// El navegador puede tener el almacenamiento bloqueado (modo privado, ajustes
// del movil), y ahi leer o escribir lanza. No es motivo para tumbar la app.
const guardado = (clave) => {
  try {
    return localStorage.getItem(clave) || "";
  } catch {
    return "";
  }
};

const guardar = (clave, valor) => {
  try {
    if (valor) localStorage.setItem(clave, valor);
    else localStorage.removeItem(clave);
  } catch {
    // sin almacenamiento, el codigo dura lo que dure la pestana
  }
};

export const codigoAlumno = () => guardado(CODIGO_GUARDADO);
export const guardarCodigoAlumno = (codigo) => guardar(CODIGO_GUARDADO, String(codigo || "").trim());
export const olvidarCodigoAlumno = () => guardar(CODIGO_GUARDADO, "");

export const claveProfesora = () => guardado(CLAVE_GUARDADA);
export const guardarClaveProfesora = (clave) => guardar(CLAVE_GUARDADA, String(clave || "").trim());
export const olvidarClaveProfesora = () => guardar(CLAVE_GUARDADA, "");

// Devuelve los datos, o null si algo ha ido mal. El motivo se distingue con
// "estado": 401 es clave incorrecta y 404 codigo que no existe, que son los dos
// casos que la interfaz necesita contar al usuario.
async function pedir(ruta, { metodo = "GET", cuerpo, clave } = {}) {
  if (!BASE) return { ok: false, estado: 0, datos: null };
  try {
    const respuesta = await fetch(`${BASE}${ruta}`, {
      method: metodo,
      headers: {
        ...(cuerpo ? { "Content-Type": "application/json" } : {}),
        ...(clave ? { "X-Clave-Profesora": clave } : {}),
      },
      ...(cuerpo ? { body: JSON.stringify(cuerpo) } : {}),
    });
    const datos = await respuesta.json().catch(() => null);
    return { ok: respuesta.ok, estado: respuesta.status, datos };
  } catch {
    // Sin red o servidor caido: se trata igual que no tener servidor.
    return { ok: false, estado: 0, datos: null };
  }
}

// --- Alumno ---------------------------------------------------------------

export const buscarAlumno = (codigo) => pedir(`/api/alumno/${encodeURIComponent(codigo)}`);

export const progresoAlumno = (codigo) =>
  pedir(`/api/alumno/${encodeURIComponent(codigo)}/progreso`);

// Se lanzan sin esperar respuesta: guardar el progreso no puede hacer que el
// alumno espere ni que se le corte la sesion.
export function registrarSesion(sesion) {
  const codigo = codigoAlumno();
  if (!codigo || !BASE) return;
  pedir(`/api/alumno/${encodeURIComponent(codigo)}/sesion`, { metodo: "POST", cuerpo: sesion });
}

export function registrarApertura(apertura) {
  const codigo = codigoAlumno();
  if (!codigo || !BASE) return;
  pedir(`/api/alumno/${encodeURIComponent(codigo)}/apertura`, { metodo: "POST", cuerpo: apertura });
}

// --- Profesora ------------------------------------------------------------

export const listarAlumnos = (clave) => pedir("/api/profesora/alumnos", { clave });

export const detalleAlumno = (clave, codigo) =>
  pedir(`/api/profesora/alumno/${encodeURIComponent(codigo)}`, { clave });

export const altaAlumno = (clave, nombre, nivel, hasta) =>
  pedir("/api/profesora/alumnos", { metodo: "POST", clave, cuerpo: { nombre, nivel, hasta } });

export const cambiarAcceso = (clave, codigo, cambio) =>
  pedir(`/api/profesora/alumno/${encodeURIComponent(codigo)}/acceso`, {
    metodo: "POST",
    clave,
    cuerpo: cambio,
  });
