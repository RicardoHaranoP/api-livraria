import livro from '../models/Livro.js'

class LivroController {

    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        }catch(err){
            res.status(500).json({message: `erro ao listar livros - ${err.message}` })
        }

    }

    static async consultaLivro (req,res) {
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        }catch(err){
            res.status(500).json({message: `erro na requisição - ${err.message}` })
        }
    }

    static async postLivro (req,res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: 'cadastrado com sucesso', livro: novoLivro})
        }catch(err) {
            res.status(500).json({message: `erro ao cadastrar livro - ${err.message}` })
        }
        
    }

    static async putLivro (req,res) {

        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: 'livro atualizado com sucesso'})

        }catch(err) {
            res.status(500).json({message: `falha na atualizção do livro - ${err.message}` })
        }
    }

    static async deleteLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: "livro deletado com sucesso"})

        }catch (err) {
            res.status(500).json({message: `falha ao deletar livro - ${err.message}` })
        }
    }
}

export default LivroController;