import { Router } from "express";
import {
  getAlimentos,
  getAlimentoById,
  getAlimentosByGrupo
} from "../controller/alimentos";

const router = Router();

router.get("/", getAlimentos);
router.get("/:id", getAlimentoById);
router.get("/grupo/:grupo_id", getAlimentosByGrupo);

export default router;