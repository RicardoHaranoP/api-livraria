import express from "express"
import conectaNaDatabase from "./config/dbConnect.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error('erro de conexão', erro)
})

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "Revolucao dos bichos"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get('/', (req,res) => {
    res.status(200).send("livraria")
})

app.get('/livros', (req,res) => {
    res.status(200).json(livros);
})

app.get(`/livros/:id`, (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(200).send('livro atualizado com sucesso')
})

// splice altera elementos de uma lista, adiciona
// novos elementos e remove outros
// parâmetros: indice, deleteCount, elementos1 ... elementosN
app.delete('/livros/:id', (req,res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("livro deletado com sucesso")
})

export default app
