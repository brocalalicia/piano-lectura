import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import { crearApp } from "./app.js";

const aqui = path.dirname(fileURLToPath(import.meta.url));

// La cadena de conexion y la clave de profesora las pone Coolify como variables
// de entorno: no viven en el repositorio.
const { DATABASE_URL, CLAVE_PROFESORA, PORT = 3000, ORIGEN_PERMITIDO } = process.env;
if (!DATABASE_URL) throw new Error("Falta DATABASE_URL");
if (!CLAVE_PROFESORA) throw new Error("Falta CLAVE_PROFESORA");

const db = new pg.Pool({ connectionString: DATABASE_URL });

// El esquema se aplica al arrancar. Todas las sentencias son idempotentes, asi
// que reiniciar el servicio no rompe nada.
await db.query(fs.readFileSync(path.join(aqui, "..", "esquema.sql"), "utf8"));

crearApp(db, { claveProfesora: CLAVE_PROFESORA, origenPermitido: ORIGEN_PERMITIDO })
  .listen(Number(PORT), () => console.log(`API escuchando en el puerto ${PORT}`));
