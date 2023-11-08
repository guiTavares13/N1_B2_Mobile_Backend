import Product from "../models/Products.js";
import errorHandler from "../middlewares/errorHandler.js";

const ProductsController = {

    create: errorHandler(async (req, res) => {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    }),

    list: errorHandler(async (req, res) => {
        const products = await Product.findAll();
        return res.status(200).json(products);
    }),

    listById: errorHandler(async (req, res) => {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json(product);
    }),

    findByPk: errorHandler(async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json(product);
    }),

    findByCompany: errorHandler(async (req, res) => {
        const products = await Product.findAll({
            where: { type_id: req.params.company_id },
        })

        console.log('Produtos encontrados:', products);
        
        if (!products || products.length === 0) {
            return res.status(404).json({ error: "No products found for the specified company." });
        }

        return res.status(200).json(products);
    }),

    findByType: errorHandler(async (req, res) => {
        console.log(req.params)

        const products = await Product.findAll({
            where: { type_id: req.params.type_id },
        });
        
        console.log('Produtos encontrados:', products);
        
        if (!products || products.length === 0) {
            return res.status(404).json({ error: "No products found for the specified type." });
        }

        return res.status(200).json(products);
    }),


    update: errorHandler(async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        await product.update(req.body);
        return res.status(200).json(product);
    }),

    delete: errorHandler(async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        await product.destroy();
        return res.status(204).json();
    })

}

export default ProductsController;
