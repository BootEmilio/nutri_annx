import { Router } from "express";
import {
  getGrupoAlimentos,
  getGrupoAlimentoById,
} from "../controller/grupos_alimentos";

const router = Router();

router.get("/", getGrupoAlimentos);
router.get("/:id", getGrupoAlimentoById);

export default router;
