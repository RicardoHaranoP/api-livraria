import express from "express"
import conectaNaDatabase from "./config/dbConnect.js"
import livro from "./models/Livro.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error('erro de conexão', erro)
})

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express()
app.use(express.json())


app.get('/', (req,res) => {
    res.status(200).send("livraria")
})



export default app
