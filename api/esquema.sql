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

-- Cada vez que el alumno abre una leccion se guarda una fila. No se agrupa por
-- dia a proposito: que abra la misma leccion cinco veces en una tarde es
-- justamente lo que la profesora quiere ver.
--
-- "dia" va aparte de "creado" aunque se pueda deducir de el, para poder agrupar
-- por dia sin convertir fechas en cada consulta.
CREATE TABLE IF NOT EXISTS aperturas (
  id         SERIAL PRIMARY KEY,
  alumno_id  INTEGER NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  nivel      TEXT NOT NULL,
  curso      INTEGER NOT NULL,
  leccion    TEXT NOT NULL,
  dia        DATE NOT NULL DEFAULT CURRENT_DATE,
  creado     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS aperturas_por_alumno ON aperturas (alumno_id, dia);

-- Cuanto tiempo estuvo la leccion en pantalla, en milisegundos. Lo manda la app
-- al salir de la leccion; si el alumno cierra el navegador de golpe se queda en
-- NULL y esa apertura no entra en la media de minutos. Va como ALTER y no en el
-- CREATE porque la tabla ya existia en produccion cuando se anadio.
ALTER TABLE aperturas ADD COLUMN IF NOT EXISTS duracion_ms INTEGER;

-- Que cursos tiene abiertos cada alumno. Sin fila, el curso esta cerrado: la
-- profesora los va abriendo a medida que da la clase. No es una barrera de
-- seguridad, es una guia; el alumno sin codigo ve el programa entero.
CREATE TABLE IF NOT EXISTS accesos (
  id         SERIAL PRIMARY KEY,
  alumno_id  INTEGER NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  nivel      TEXT NOT NULL,
  curso      INTEGER NOT NULL,
  abierto    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS acceso_unico ON accesos (alumno_id, nivel, curso);
