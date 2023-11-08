import express from 'express';
import CompaniesController from '../controllers/CompaniesController.js';

const companiesRouter = express.Router();

companiesRouter
    .post("/company", CompaniesController.create)
    .get("/company", CompaniesController.list)
    .get('/company/:id', CompaniesController.findByPk)

export default companiesRouter;