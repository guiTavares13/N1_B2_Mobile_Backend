import { response } from "express";

import ProdutoModel from "../models/produto";

class ProdutoController {

    async create(req, res) {
        const produto = new ProdutoModel(req.body);

        await produto.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}

