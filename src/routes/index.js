import express from "express";

import produtoRouter from './produtoRouter.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Titulo: "N2-B1 Programação Mobile"})
    })

    app.use(
        express.json(),
        produtoRouter,
    )
}

export default routes;