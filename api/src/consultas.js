// Las consultas, separadas del servidor para poder probarlas contra un Postgres
// de mentira sin levantar Express ni tocar la base de datos de verdad.

export async function crearAlumno(db, nombre, codigo) {
  const { rows } = await db.query(
    "INSERT INTO alumnos (nombre, codigo) VALUES ($1, $2) RETURNING id, nombre, codigo, creado",
    [nombre, codigo]
  );
  return rows[0];
}

export async function alumnoPorCodigo(db, codigo) {
  const { rows } = await db.query(
    "SELECT id, nombre, codigo FROM alumnos WHERE codigo = $1",
    [codigo]
  );
  return rows[0] || null;
}

export async function guardarSesion(db, alumnoId, sesion) {
  const { rows } = await db.query(
    `INSERT INTO sesiones (alumno_id, clave, nivel, aciertos, fallos, racha_maxima, duracion_ms, estrellas)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id, creado`,
    [
      alumnoId,
      sesion.clave,
      sesion.nivel,
      sesion.aciertos,
      sesion.fallos,
      sesion.rachaMaxima,
      sesion.duracionMs,
      sesion.estrellas,
    ]
  );
  return rows[0];
}

// El historial que ve el alumno: sus ultimas sesiones, de la mas reciente a la
// mas antigua.
export async function sesionesDe(db, alumnoId, limite = 50) {
  const { rows } = await db.query(
    `SELECT clave, nivel, aciertos, fallos, racha_maxima, duracion_ms, estrellas, creado
       FROM sesiones WHERE alumno_id = $1
      ORDER BY creado DESC LIMIT $2`,
    [alumnoId, limite]
  );
  return rows;
}

// La mejor marca de cada clave y nivel: es lo que dice si ha mejorado. Se
// ordena por precision y, a igualdad, por tiempo, que es como se leen las
// estrellas en la app.
export async function mejoresMarcas(db, alumnoId) {
  const { rows } = await db.query(
    `SELECT clave, nivel,
            COUNT(*)::int                                   AS sesiones,
            MAX(estrellas)::int                             AS mejores_estrellas,
            MIN(duracion_ms)::int                           AS mejor_tiempo_ms,
            MAX(aciertos)::int                              AS mas_aciertos,
            MAX(creado)                                     AS ultima
       FROM sesiones WHERE alumno_id = $1
      GROUP BY clave, nivel
      ORDER BY clave, nivel`,
    [alumnoId]
  );
  return rows;
}

// Cada apertura es una fila. No se agrupa por dia: abrir cinco veces la misma
// leccion en una tarde es informacion, no ruido.
export async function registrarApertura(db, alumnoId, nivel, curso, leccion) {
  await db.query(
    "INSERT INTO aperturas (alumno_id, nivel, curso, leccion) VALUES ($1, $2, $3, $4)",
    [alumnoId, nivel, curso, leccion]
  );
}

// El resumen de la profesora: una fila por alumno con lo justo para saber de un
// vistazo quien ha practicado y quien no.
export async function resumenAlumnos(db) {
  const { rows } = await db.query(
    `SELECT a.id, a.nombre, a.codigo, a.creado,
            COUNT(s.id)::int          AS sesiones,
            MAX(s.creado)             AS ultima_sesion,
            COALESCE(SUM(s.aciertos), 0)::int AS aciertos,
            COALESCE(SUM(s.fallos), 0)::int   AS fallos
       FROM alumnos a
       LEFT JOIN sesiones s ON s.alumno_id = a.id
      GROUP BY a.id, a.nombre, a.codigo, a.creado
      ORDER BY a.nombre`
  );
  return rows;
}

// Cuantas veces ha abierto cada leccion, en cuantos dias distintos y entre que
// fechas. Las medias se calculan despues, en estadisticas.js.
export async function aperturasPorLeccion(db, alumnoId) {
  const { rows } = await db.query(
    `SELECT nivel, curso, leccion,
            COUNT(*)::int            AS aperturas,
            COUNT(DISTINCT dia)::int AS dias,
            MIN(dia)                 AS primera,
            MAX(dia)                 AS ultima
       FROM aperturas WHERE alumno_id = $1
      GROUP BY nivel, curso, leccion
      ORDER BY nivel, curso, leccion`,
    [alumnoId]
  );
  return rows;
}

export async function aperturasPorCurso(db, alumnoId) {
  const { rows } = await db.query(
    `SELECT nivel, curso,
            COUNT(*)::int                AS aperturas,
            COUNT(DISTINCT leccion)::int AS lecciones,
            COUNT(DISTINCT dia)::int     AS dias,
            MIN(dia)                     AS primera,
            MAX(dia)                     AS ultima
       FROM aperturas WHERE alumno_id = $1
      GROUP BY nivel, curso
      ORDER BY nivel, curso`,
    [alumnoId]
  );
  return rows;
}

// La serie diaria, para poder dibujar la evolucion en vez de solo la media.
export async function aperturasPorDia(db, alumnoId) {
  const { rows } = await db.query(
    `SELECT dia, COUNT(*)::int AS aperturas
       FROM aperturas WHERE alumno_id = $1
      GROUP BY dia ORDER BY dia`,
    [alumnoId]
  );
  return rows;
}
