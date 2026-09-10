-- Esquema de la base de datos. Se aplica solo al arrancar la API, asi que
-- todas las sentencias tienen que poder ejecutarse dos veces sin romper nada.

-- Un alumno. No se guarda ni correo ni contrasena: entra con un codigo que le
-- da la profesora, y el unico dato personal es el nombre con el que ella lo
-- llama.
CREATE TABLE IF NOT EXISTS alumnos (
  id         SERIAL PRIMARY KEY,
  nombre     TEXT NOT NULL,
  codigo     TEXT NOT NULL UNIQUE,
  creado     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Una sesion terminada del programa de lectura: los seis ejercicios de una
-- clave y un nivel. Es la unidad que la profesora mira para saber si el alumno
-- ha practicado y si mejora.
CREATE TABLE IF NOT EXISTS sesiones (
  id            SERIAL PRIMARY KEY,
  alumno_id     INTEGER NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  clave         TEXT NOT NULL,
  nivel         TEXT NOT NULL,
  aciertos      INTEGER NOT NULL,
  fallos        INTEGER NOT NULL,
  racha_maxima  INTEGER NOT NULL,
  duracion_ms   INTEGER NOT NULL,
  estrellas     INTEGER NOT NULL,
  creado        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Por que este indice: todas las consultas piden las sesiones de un alumno
-- ordenadas de la mas reciente a la mas antigua.
CREATE INDEX IF NOT EXISTS sesiones_por_alumno ON sesiones (alumno_id, creado DESC);

-- Que lecciones ha abierto el alumno, para saber por donde va en el programa
-- de piano. Una fila por leccion y dia: si la abre dos veces el mismo dia solo
-- cuenta una.
CREATE TABLE IF NOT EXISTS lecciones_vistas (
  id         SERIAL PRIMARY KEY,
  alumno_id  INTEGER NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  nivel      TEXT NOT NULL,
  curso      INTEGER NOT NULL,
  leccion    TEXT NOT NULL,
  dia        DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE UNIQUE INDEX IF NOT EXISTS leccion_por_dia
  ON lecciones_vistas (alumno_id, leccion, dia);
