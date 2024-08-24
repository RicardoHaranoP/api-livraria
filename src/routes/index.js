import express from "express"
import livrosRotas from "./livroRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res)=> res.status(200).send("livraria"))

    app.use(express.json(), livrosRotas)
}

export default routes;