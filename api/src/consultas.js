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
// Devuelve el id para que la app pueda decir despues cuanto duro.
export async function registrarApertura(db, alumnoId, nivel, curso, leccion) {
  const { rows } = await db.query(
    "INSERT INTO aperturas (alumno_id, nivel, curso, leccion) VALUES ($1, $2, $3, $4) RETURNING id",
    [alumnoId, nivel, curso, leccion]
  );
  return rows[0].id;
}

// La app manda la duracion acumulada varias veces (al ocultar la pestana, al
// salir de la leccion), asi que se guarda el mayor valor recibido y da igual
// el orden en que lleguen. Solo toca aperturas del propio alumno.
export async function guardarDuracionApertura(db, alumnoId, aperturaId, duracionMs) {
  const { rowCount } = await db.query(
    `UPDATE aperturas SET duracion_ms = GREATEST(COALESCE(duracion_ms, 0), $1)
      WHERE id = $2 AND alumno_id = $3`,
    [duracionMs, aperturaId, alumnoId]
  );
  return rowCount === 1;
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
            MAX(dia)                 AS ultima,
            COUNT(duracion_ms)::int  AS aperturas_medidas,
            COALESCE(SUM(duracion_ms), 0)::bigint AS duracion_total_ms
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
            MAX(dia)                     AS ultima,
            COUNT(duracion_ms)::int      AS aperturas_medidas,
            COALESCE(SUM(duracion_ms), 0)::bigint AS duracion_total_ms
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

// --- Que cursos tiene abierto cada alumno --------------------------------

export async function cursosAbiertos(db, alumnoId) {
  const { rows } = await db.query(
    "SELECT nivel, curso FROM accesos WHERE alumno_id = $1 ORDER BY nivel, curso",
    [alumnoId]
  );
  return rows;
}

export async function abrirCurso(db, alumnoId, nivel, curso) {
  await db.query(
    `INSERT INTO accesos (alumno_id, nivel, curso) VALUES ($1, $2, $3)
     ON CONFLICT (alumno_id, nivel, curso) DO NOTHING`,
    [alumnoId, nivel, curso]
  );
}

export async function cerrarCurso(db, alumnoId, nivel, curso) {
  await db.query(
    "DELETE FROM accesos WHERE alumno_id = $1 AND nivel = $2 AND curso = $3",
    [alumnoId, nivel, curso]
  );
}

// Abre de golpe del curso 1 al que se diga, que es como se usa en la practica:
// "ya puede llegar hasta el cuatro". Va en una sola sentencia y no en un bucle
// de inserciones para no hacer un viaje por curso.
export async function abrirHasta(db, alumnoId, nivel, hasta) {
  if (!Number.isInteger(hasta) || hasta < 1) return;
  const valores = [];
  const parametros = [alumnoId, nivel];
  for (let curso = 1; curso <= hasta; curso += 1) {
    parametros.push(curso);
    valores.push(`($1, $2, $${parametros.length})`);
  }
  await db.query(
    `INSERT INTO accesos (alumno_id, nivel, curso) VALUES ${valores.join(", ")}
     ON CONFLICT (alumno_id, nivel, curso) DO NOTHING`,
    parametros
  );
}
