import { Request, Response } from "express";
import { pool } from "../db/connection";

export const getGrupoAlimentos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM grupos_alimentos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener grupos de alimentos" });
  }
};

export const getGrupoAlimentoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM grupos_alimentos WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar grupo de alimentos" });
  }
};