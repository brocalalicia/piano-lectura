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

export async function registrarLeccion(db, alumnoId, nivel, curso, leccion) {
  await db.query(
    `INSERT INTO lecciones_vistas (alumno_id, nivel, curso, leccion)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (alumno_id, leccion, dia) DO NOTHING`,
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

export async function leccionesDe(db, alumnoId) {
  const { rows } = await db.query(
    `SELECT nivel, curso, leccion, MAX(dia) AS ultima
       FROM lecciones_vistas WHERE alumno_id = $1
      GROUP BY nivel, curso, leccion
      ORDER BY nivel, curso`,
    [alumnoId]
  );
  return rows;
}
