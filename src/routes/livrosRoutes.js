import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarMangas)
    .post("/livros", LivroController.cadastarMangas)
    .put("/livros/:id", LivroController.atualizarManga) 
    .delete("/livros/:id", LivroController.deletarManga)
export default router;