// Las consultas se prueban contra un Postgres en memoria (pg-mem). No sustituye
// al de verdad, pero coge los errores de SQL y de esquema antes de desplegar.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { newDb } from "pg-mem";
import * as consultas from "../src/consultas.js";

function baseNueva() {
  const mem = newDb();
  mem.public.none(fs.readFileSync(new URL("../esquema.sql", import.meta.url), "utf8"));
  const { Pool } = mem.adapters.createPg();
  return new Pool();
}

const SESION = {
  clave: "sol", nivel: "inicial1", aciertos: 58, fallos: 2,
  rachaMaxima: 21, duracionMs: 94000, estrellas: 5,
};

// El esquema se aplica cada vez que arranca la API, asi que reiniciar el
// servicio no puede romperlo. pg-mem no sabe reejecutar un CREATE ... IF NOT
// EXISTS sobre algo que ya existe (Postgres si), asi que se comprueba la
// propiedad de otra forma: que ningun CREATE se haya escrito sin la guarda.
test("todo el esquema lleva IF NOT EXISTS", () => {
  const sql = fs.readFileSync(new URL("../esquema.sql", import.meta.url), "utf8");
  const creaciones = sql.match(/CREATE[^;]*?(TABLE|INDEX)[^;(]*/gi) || [];
  assert.ok(creaciones.length >= 5, "se esperaban al menos cinco CREATE");
  for (const creacion of creaciones) {
    assert.match(creacion, /IF NOT EXISTS/i, `sin guarda: ${creacion.trim()}`);
  }
});

test("un alumno se crea y se encuentra por su codigo", async () => {
  const db = baseNueva();
  const creado = await consultas.crearAlumno(db, "Marta", "abc12345");
  assert.equal(creado.nombre, "Marta");
  const hallado = await consultas.alumnoPorCodigo(db, "abc12345");
  assert.equal(hallado.id, creado.id);
  assert.equal(await consultas.alumnoPorCodigo(db, "noexiste"), null);
});

test("dos alumnos no pueden compartir codigo", async () => {
  const db = baseNueva();
  await consultas.crearAlumno(db, "Marta", "abc12345");
  await assert.rejects(() => consultas.crearAlumno(db, "Luis", "abc12345"));
});

test("las sesiones se guardan y vuelven de la mas reciente a la mas antigua", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.guardarSesion(db, alumno.id, SESION);
  await consultas.guardarSesion(db, alumno.id, { ...SESION, nivel: "inicial2", estrellas: 3 });
  const sesiones = await consultas.sesionesDe(db, alumno.id);
  assert.equal(sesiones.length, 2);
  assert.ok(sesiones[0].creado >= sesiones[1].creado);
});

test("las mejores marcas agrupan por clave y nivel", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.guardarSesion(db, alumno.id, SESION);
  await consultas.guardarSesion(db, alumno.id, { ...SESION, duracionMs: 71000, estrellas: 4 });
  await consultas.guardarSesion(db, alumno.id, { ...SESION, clave: "fa" });
  const marcas = await consultas.mejoresMarcas(db, alumno.id);
  assert.equal(marcas.length, 2);
  const sol = marcas.find((m) => m.clave === "sol");
  assert.equal(sol.sesiones, 2);
  assert.equal(sol.mejor_tiempo_ms, 71000, "el mejor tiempo es el mas corto");
  assert.equal(sol.mejores_estrellas, 5, "las mejores estrellas son las mas altas");
});

test("cada apertura cuenta, tambien las del mismo dia", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  for (let i = 0; i < 5; i += 1) {
    await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  }
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-teclado");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 2, "p1c2-figuras");

  const lecciones = await consultas.aperturasPorLeccion(db, alumno.id);
  assert.equal(lecciones.length, 3, "tres lecciones distintas");
  const pentagrama = lecciones.find((l) => l.leccion === "p1c1-pentagrama");
  assert.equal(pentagrama.aperturas, 5, "las cinco aperturas se cuentan");
  assert.equal(pentagrama.dias, 1, "todas fueron el mismo dia");
});

test("las aperturas se agrupan tambien por curso", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-teclado");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 2, "p1c2-figuras");

  const cursos = await consultas.aperturasPorCurso(db, alumno.id);
  assert.equal(cursos.length, 2);
  const uno = cursos.find((c) => c.curso === 1);
  assert.equal(uno.aperturas, 3, "tres aperturas en el curso 1");
  assert.equal(uno.lecciones, 2, "de dos lecciones distintas");
});

test("la duracion se guarda por apertura y entra en la media de minutos", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  const otro = await consultas.crearAlumno(db, "Luis", "xyz98765");
  const a = await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  const b = await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");

  assert.ok(Number.isInteger(a) && a !== b, "cada apertura devuelve su id");
  assert.equal(await consultas.guardarDuracionApertura(db, alumno.id, a, 60000), true);
  // Llega primero el total y luego un parcial mas viejo: se queda el mayor.
  assert.equal(await consultas.guardarDuracionApertura(db, alumno.id, b, 180000), true);
  assert.equal(await consultas.guardarDuracionApertura(db, alumno.id, b, 90000), true);
  assert.equal(await consultas.guardarDuracionApertura(db, otro.id, a, 999999), false,
    "un alumno no puede tocar las aperturas de otro");

  const [leccion] = await consultas.aperturasPorLeccion(db, alumno.id);
  assert.equal(leccion.aperturas, 3);
  assert.equal(leccion.aperturas_medidas, 2, "la tercera sigue sin duracion");
  assert.equal(Number(leccion.duracion_total_ms), 240000);
  const [curso] = await consultas.aperturasPorCurso(db, alumno.id);
  assert.equal(Number(curso.duracion_total_ms), 240000);
});

test("la serie diaria devuelve una fila por dia", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-pentagrama");
  await consultas.registrarApertura(db, alumno.id, "primeros-pasos", 1, "p1c1-teclado");
  const dias = await consultas.aperturasPorDia(db, alumno.id);
  assert.equal(dias.length, 1);
  assert.equal(dias[0].aperturas, 2);
});

test("el resumen incluye a los alumnos que no han practicado nunca", async () => {
  const db = baseNueva();
  const marta = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.crearAlumno(db, "Luis", "def67890");
  await consultas.guardarSesion(db, marta.id, SESION);
  const resumen = await consultas.resumenAlumnos(db);
  assert.equal(resumen.length, 2);
  const luis = resumen.find((a) => a.nombre === "Luis");
  assert.equal(luis.sesiones, 0, "Luis sale con cero, no desaparece");
  assert.equal(luis.ultima_sesion, null);
  assert.equal(resumen.find((a) => a.nombre === "Marta").aciertos, 58);
});

test("un alumno nuevo no tiene ningun curso abierto", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  assert.deepEqual(await consultas.cursosAbiertos(db, alumno.id), []);
});

test("abrir hasta el cuatro abre del uno al cuatro", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.abrirHasta(db, alumno.id, "primeros-pasos", 4);
  const abiertos = await consultas.cursosAbiertos(db, alumno.id);
  assert.deepEqual(abiertos.map((c) => c.curso), [1, 2, 3, 4]);
});

test("abrir dos veces no duplica ni falla", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.abrirHasta(db, alumno.id, "primeros-pasos", 3);
  await consultas.abrirHasta(db, alumno.id, "primeros-pasos", 5);
  await consultas.abrirCurso(db, alumno.id, "primeros-pasos", 2);
  const abiertos = await consultas.cursosAbiertos(db, alumno.id);
  assert.deepEqual(abiertos.map((c) => c.curso), [1, 2, 3, 4, 5]);
});

test("se puede abrir un curso suelto sin abrir los de antes", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.abrirCurso(db, alumno.id, "primeros-pasos", 7);
  const abiertos = await consultas.cursosAbiertos(db, alumno.id);
  assert.deepEqual(abiertos.map((c) => c.curso), [7]);
});

test("cerrar un curso deja los demas abiertos", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.abrirHasta(db, alumno.id, "primeros-pasos", 3);
  await consultas.cerrarCurso(db, alumno.id, "primeros-pasos", 2);
  const abiertos = await consultas.cursosAbiertos(db, alumno.id);
  assert.deepEqual(abiertos.map((c) => c.curso), [1, 3]);
});

test("los accesos de un alumno no afectan a otro", async () => {
  const db = baseNueva();
  const marta = await consultas.crearAlumno(db, "Marta", "abc12345");
  const luis = await consultas.crearAlumno(db, "Luis", "def67890");
  await consultas.abrirHasta(db, marta.id, "primeros-pasos", 5);
  assert.equal((await consultas.cursosAbiertos(db, luis.id)).length, 0);
  assert.equal((await consultas.cursosAbiertos(db, marta.id)).length, 5);
});

test("los niveles llevan cuentas separadas", async () => {
  const db = baseNueva();
  const alumno = await consultas.crearAlumno(db, "Marta", "abc12345");
  await consultas.abrirHasta(db, alumno.id, "primeros-pasos", 3);
  await consultas.abrirCurso(db, alumno.id, "tomando-vuelo", 1);
  const abiertos = await consultas.cursosAbiertos(db, alumno.id);
  assert.equal(abiertos.filter((c) => c.nivel === "primeros-pasos").length, 3);
  assert.equal(abiertos.filter((c) => c.nivel === "tomando-vuelo").length, 1);
});
