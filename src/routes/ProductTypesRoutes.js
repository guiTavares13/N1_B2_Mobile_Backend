import express from 'express';
import ProductTypesController from '../controllers/ProductTypesController.js';

const productTypesRouter = express.Router();

productTypesRouter
    .post("/productTypes", ProductTypesController.create)
    .get("/productTypes", ProductTypesController.list)

export default productTypesRouter;
