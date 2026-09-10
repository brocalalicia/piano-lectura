// Las medias se calculan aqui y no en SQL: asi se pueden probar sin base de
// datos y no dependen de las funciones de fecha de Postgres.

const DIA_MS = 24 * 60 * 60 * 1000;

// Dias que han pasado desde la primera apertura hasta hoy, contando los dos
// extremos. Nunca menos de uno, para no dividir entre cero el dia del estreno.
export function diasTranscurridos(primera, hasta = new Date()) {
  const desde = new Date(primera);
  const dias = Math.floor((fecha(hasta) - fecha(desde)) / DIA_MS) + 1;
  return Math.max(1, dias);
}

const fecha = (d) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
const redondear = (n) => Math.round(n * 100) / 100;

// La media es aperturas entre dias transcurridos, incluidos los dias en los que
// no toco nada: es lo que dice si practica a diario o solo la vispera de la
// clase. La semana son siete de esos dias y el mes treinta.
export function medias(aperturas, primera, hasta = new Date()) {
  if (!aperturas || !primera) return { dia: 0, semana: 0, mes: 0, diasTranscurridos: 0 };
  const dias = diasTranscurridos(primera, hasta);
  const porDia = aperturas / dias;
  return {
    dia: redondear(porDia),
    semana: redondear(porDia * 7),
    mes: redondear(porDia * 30),
    diasTranscurridos: dias,
  };
}

// Anade las medias a cada fila de un agrupado (por leccion o por curso).
export function conMedias(filas, hasta = new Date()) {
  return filas.map((fila) => ({
    ...fila,
    medias: medias(fila.aperturas, fila.primera, hasta),
  }));
}
