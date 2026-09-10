# API de Clase de piano

Guarda el progreso de los alumnos: cada sesión terminada del programa de
Lectura y qué lecciones ha abierto cada uno. La app la usa sólo si el alumno ha
metido su código; sin código funciona igual que siempre y no guarda nada.

## Cómo se identifica un alumno

No hay correo ni contraseña. La profesora crea al alumno con su nombre y la API
le devuelve un **código de ocho letras** que el alumno escribe una vez en la
app. El único dato personal que se guarda es ese nombre.

La pantalla de profesora va detrás de `CLAVE_PROFESORA`, que se pone como
variable de entorno.

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
| `POST` | `/api/alumno/:codigo/leccion` | el alumno |
| `GET` | `/api/profesora/alumnos` | con `X-Clave-Profesora` |
| `GET` | `/api/profesora/alumno/:codigo` | con `X-Clave-Profesora` |
| `POST` | `/api/profesora/alumnos` | con `X-Clave-Profesora` |

## Pruebas

    npm test

Corren contra un Postgres en memoria (`pg-mem`), así que comprueban el SQL sin
necesidad de una base de datos.
