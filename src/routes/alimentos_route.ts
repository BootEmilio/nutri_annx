import { Router } from "express";
import {
  getAlimentos,
  getAlimentoById,
} from "../controller/alimentos";

const router = Router();

router.get("/", getAlimentos);
router.get("/:id", getAlimentoById);

export default router;