import { Request, Response } from "express";
import { pool } from "../db/connection";

export const getAlimentos = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM alimentos");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener alimentos" });
    }
};

export const getAlimentoById = async (req: Request, res: Response) => {
    const { id } = req.params;
     try {
    const result = await pool.query(
      "SELECT * FROM alimentos WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar alimento" });
  }
};