import express from 'express';
import ProductsController from '../controllers/ProductsController';

const productRouter = express.Router();

productRouter
    .post("/product", ProductsController.create)
    .get("/product", ProductsController.list)

export default productRouter;