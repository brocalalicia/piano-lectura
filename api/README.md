# API de Clase de piano

Guarda el progreso de los alumnos: cada sesión terminada del programa de
Lectura y **cada vez** que abre una lección. La app la usa sólo si el alumno ha
metido su código; sin código funciona igual que siempre y no guarda nada.

## Cómo se cuentan las aperturas

Una fila por apertura, sin agrupar por día: si abre cinco veces la misma
lección en una tarde, se ven las cinco. De ahí salen los totales por lección y
por curso, los días distintos en que la ha abierto y la serie diaria.

**La media es aperturas ÷ días transcurridos desde la primera**, contando
también los días en que no tocó nada — que es lo que distingue a quien practica
a diario de quien lo abre todo la víspera de la clase. La semana son siete de
esos días y el mes treinta.

## Cómo se identifica un alumno

No hay correo ni contraseña. La profesora crea al alumno con su nombre y la API
le devuelve un **código de ocho letras** que el alumno escribe una vez en la
app. El único dato personal que se guarda es ese nombre.

La pantalla de profesora va detrás de `CLAVE_PROFESORA`, que se pone como
variable de entorno.

## Acceso progresivo a los cursos

La profesora va abriendo los cursos a medida que los da. Un curso sin fila en
`accesos` está cerrado, y el alumno lo ve en el menú pero no puede entrar.

Se puede abrir **hasta un curso** (`hasta: 4` abre del 1 al 4, que es como se
usa en clase) o **un curso suelto** (`curso: 7`, sin abrir los de antes), y
cerrarlos igual. Cada nivel lleva su propia cuenta.

**No es una barrera de seguridad, es una guía.** Un alumno sin código —o que
borre el suyo— ve el programa entero. Sirve para que no se adelante sin querer,
no para impedírselo.

## Variables de entorno

| Variable | Para qué |
|---|---|
| `DATABASE_URL` | Cadena de conexión del Postgres de Coolify |
| `CLAVE_PROFESORA` | Lo que hay que saber para ver los datos de todos los alumnos |
| `ORIGEN_PERMITIDO` | Dominio de la app, para el CORS. Si no se pone, se acepta cualquiera |
| `PORT` | Por defecto 3000 |

## Despliegue en Coolify

Segundo recurso, del mismo repositorio:

- **Base Directory**: `api`
- **Build Pack**: Nixpacks
- **Install Command**: `npm ci --omit=dev`
- **Start Command**: `npm start`
- **Port**: `3000`

El esquema se aplica solo al arrancar, así que no hay que ejecutar migraciones
a mano. Todas las sentencias llevan `IF NOT EXISTS` y reiniciar el servicio no
toca los datos.

## Rutas

| Método | Ruta | Quién |
|---|---|---|
| `GET` | `/api/salud` | cualquiera |
| `GET` | `/api/alumno/:codigo` | el alumno |
| `GET` | `/api/alumno/:codigo/progreso` | el alumno |
| `POST` | `/api/alumno/:codigo/sesion` | el alumno |
| `POST` | `/api/alumno/:codigo/apertura` | el alumno |
| `GET` | `/api/profesora/alumnos` | con `X-Clave-Profesora` |
| `GET` | `/api/profesora/alumno/:codigo` | con `X-Clave-Profesora` |
| `POST` | `/api/profesora/alumnos` | con `X-Clave-Profesora` |
| `POST` | `/api/profesora/alumno/:codigo/acceso` | con `X-Clave-Profesora` |

## Pruebas

    npm test

Corren contra un Postgres en memoria (`pg-mem`), así que comprueban el SQL sin
necesidad de una base de datos.
