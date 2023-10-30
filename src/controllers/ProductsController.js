import Product from "../models/Products";
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

    findByPk: errorHandler(async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json(product);
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
