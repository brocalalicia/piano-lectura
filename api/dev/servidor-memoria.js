// Levanta la API contra un Postgres en memoria, con un alumno de ejemplo. Sirve
// para probar la app entera sin base de datos. No se despliega: es una
// herramienta de desarrollo.
import fs from "node:fs";
import { newDb } from "pg-mem";
import { crearApp } from "../src/app.js";
import * as consultas from "../src/consultas.js";

const mem = newDb();
mem.public.none(fs.readFileSync(new URL("../esquema.sql", import.meta.url), "utf8"));
const { Pool } = mem.adapters.createPg();
const db = new Pool();

const marta = await consultas.crearAlumno(db, "Marta", "marta123");
await consultas.crearAlumno(db, "Luis", "luis4567");
await consultas.abrirHasta(db, marta.id, "primeros-pasos", 3);

for (const s of [
  { clave: "sol", nivel: "inicial1", aciertos: 55, fallos: 5, rachaMaxima: 19, duracionMs: 128000, estrellas: 12 },
  { clave: "sol", nivel: "inicial1", aciertos: 58, fallos: 2, rachaMaxima: 26, duracionMs: 96000, estrellas: 16 },
  { clave: "fa", nivel: "inicial1", aciertos: 51, fallos: 9, rachaMaxima: 14, duracionMs: 151000, estrellas: 9 },
]) await consultas.guardarSesion(db, marta.id, s);

for (const [curso, leccion, veces] of [
  [1, "p1c1-pentagrama", 5], [1, "p1c1-teclado", 2], [2, "p1c2-figuras", 3],
]) {
  for (let i = 0; i < veces; i += 1) {
    await consultas.registrarApertura(db, marta.id, "primeros-pasos", curso, leccion);
  }
}

const PUERTO = Number(process.env.PORT || 3001);
crearApp(db, { claveProfesora: "prueba" }).listen(PUERTO, () => {
  console.log(`API de prueba en http://localhost:${PUERTO} · alumna "marta123" · clave de profesora "prueba"`);
});
