import livro from '../models/Livro.js'

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros)
    }

    static async consultaLivro (req,res) {
        const index = buscaLivro(req.params.id)
        res.status(200).json(livros[index])
    }

    static async postLivro (req,res) {
        livros.push(req.body)
        res.status(201).send('livro cadastrado com sucesso')
    }

    static async putLivro (req,res) {
        const index = buscaLivro(req.params.id)
        livros[index].titulo = req.body.titulo;
        res.status(200).send('livro atualizado com sucesso')
    }

    static async deleteLivro(req, res) {
        const index = buscaLivro(req.params.id)
        livros.splice(index, 1)
        res.status(200).send("livro deletado com sucesso")
    }
}

export default LivroController;