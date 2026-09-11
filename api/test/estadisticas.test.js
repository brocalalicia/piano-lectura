import { test } from "node:test";
import assert from "node:assert/strict";
import { medias, diasTranscurridos, conMedias, minutosPorApertura } from "../src/estadisticas.js";

const dia = (iso) => new Date(`${iso}T12:00:00Z`);

test("el dia del estreno cuenta como un dia, no como cero", () => {
  assert.equal(diasTranscurridos(dia("2026-09-10"), dia("2026-09-10")), 1);
});

test("los dias se cuentan por los dos extremos", () => {
  assert.equal(diasTranscurridos(dia("2026-09-01"), dia("2026-09-10")), 10);
});

test("cinco aperturas en un solo dia son cinco al dia", () => {
  const m = medias(5, dia("2026-09-10"), dia("2026-09-10"));
  assert.equal(m.dia, 5);
  assert.equal(m.semana, 35);
  assert.equal(m.mes, 150);
});

test("la media incluye los dias en los que no toco nada", () => {
  // Diez aperturas repartidas en diez dias: una al dia, aunque todas fueran
  // el mismo rato.
  const m = medias(10, dia("2026-09-01"), dia("2026-09-10"));
  assert.equal(m.dia, 1);
  assert.equal(m.semana, 7);
  assert.equal(m.mes, 30);
  assert.equal(m.diasTranscurridos, 10);
});

test("sin aperturas la media es cero y no revienta", () => {
  assert.deepEqual(medias(0, null), { dia: 0, semana: 0, mes: 0, diasTranscurridos: 0 });
});

test("conMedias respeta el resto de la fila", () => {
  const filas = [{ leccion: "p1c1-pentagrama", aperturas: 4, primera: dia("2026-09-09"), dias: 2 }];
  const [fila] = conMedias(filas, dia("2026-09-10"));
  assert.equal(fila.leccion, "p1c1-pentagrama");
  assert.equal(fila.dias, 2);
  assert.equal(fila.medias.dia, 2);
});

test("los minutos por apertura salen de las aperturas medidas, no de todas", () => {
  assert.equal(minutosPorApertura(240000, 2), 2, "dos aperturas de dos minutos");
  assert.equal(minutosPorApertura("250000", "3"), 1.4, "pg devuelve los bigint como texto");
  assert.equal(minutosPorApertura(0, 0), null, "sin medir no hay media");
  const [fila] = conMedias([{ aperturas: 4, primera: dia("2026-09-09"), duracion_total_ms: 600000, aperturas_medidas: 4 }]);
  assert.equal(fila.minutosPorApertura, 2.5);
});
