import Product from "../models/Products";

const ProductsController = {

    async create(req, res) {

        try {
            const product = await Product.create(req.body);
            return res.status(201).json(product)
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async list(req, res) {

        try {
            const products = await Product.findAll();
            return res.status(200).json(products);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
        
    }
}

export default ProductsController;