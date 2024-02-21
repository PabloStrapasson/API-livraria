import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router()

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroId);
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes