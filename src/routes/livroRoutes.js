import express from 'express'
import LivroController from '../controllers/livroController.js'

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros)

routes.get("/livros/:id", LivroController.consultaLivro)

routes.post("/livros", LivroController.postLivro)

routes.put("/livros/:id", LivroController.putLivro)

routes.delete("/livros/:id", LivroController.deleteLivro)

export default routes