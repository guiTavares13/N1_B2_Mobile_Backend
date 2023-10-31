import express from 'express';
import ProductsController from '../controllers/ProductsController.js';

const productRouter = express.Router();

productRouter
    .post("/product", ProductsController.create)
    .get("/product", ProductsController.list)
    .get("/productsByType/:type_id", ProductsController.findByType)

export default productRouter;
