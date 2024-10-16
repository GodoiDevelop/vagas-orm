// Importar o express, para utilizar o Router
import express from "express";
import {
  listarVaga,
  listarVagaPorId,
  criarVaga,
  atualizarVaga,
  apagarVaga,
  listarVagaPorCargo,
  listarVagaPorCidade,
} from "../controllers/vagasController.js";
const router = express.Router();

router.get("/vagas", listarVaga);
router.get("/vagas/:id", listarVagaPorId);
router.post("/vagas", criarVaga);
router.put("/vagas/:id", atualizarVaga);
router.delete("/vagas/:id", apagarVaga);
router.get("/cargo/:cargo", listarVagaPorCargo);
router.get("/localizacao/:cidade", listarVagaPorCidade);

// Exportar o router pra importar no app
export default router;
