import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "annx_db",
  password: "1234",
  port: 5432
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error conectando:", err);
  } else {
    console.log("Conectado a PostgreSQL:", res.rows);
  }
});
