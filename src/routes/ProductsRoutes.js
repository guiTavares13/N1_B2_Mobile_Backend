import express from 'express';
import ProductsController from '../controllers/ProductsController.js';

const productRouter = express.Router();

productRouter
    .post("/product", ProductsController.create)
    .get("/product", ProductsController.list)
    .get("/productById/:id", ProductsController.listById)
    .get("/productsByType/:type_id", ProductsController.findByType)
    .get('/productsByCompany:/company_id', ProductsController.findByCompany)
export default productRouter;
