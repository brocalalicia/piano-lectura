// Vuelca los bloques de metodo y repertorio a un CSV que la profesora edita
// con los libros delante. Se regenera con:
//
//   node dev/catalogo-csv.mjs > catalogo-metodos.csv
//
// El BOM del principio es para que Excel abra bien los acentos, y el separador
// es ";" porque es lo que espera Excel en espanol.
import { NIVELES_PRACTICA } from "../src/programa.js";

const celda = (v) => {
  const t = String(v ?? "");
  return /[";\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
};

const filas = [["curso", "nombre del curso", "bloque", "método", "páginas (edita esta columna)", "de qué va el bloque"]];
const nivel = NIVELES_PRACTICA.find((n) => n.id === "primeros-pasos");

nivel.cursos.forEach((curso, i) => {
  curso.ejercicios.forEach((ej) => {
    const p = ej.partitura;
    if (!p || p.tipo !== "referencia") return;
    p.fuentes.forEach((f, j) => {
      filas.push([
        i + 1,
        curso.titulo.es,
        j === 0 ? ej.titulo.es : "",
        f.metodo,
        f.donde.es,
        j === 0 ? p.detalle.es : "",
      ]);
    });
  });
});

process.stdout.write("﻿" + filas.map((f) => f.map(celda).join(";")).join("\n") + "\n");
