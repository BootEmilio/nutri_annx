import { Pool } from "pg";
import "dotenv/config";


export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


pool.query("SELECT NOW()")
  .then(() => console.log("✅ Conectado a DB de Render"))
  .catch(() => console.log("❌ Error en conexión"));

