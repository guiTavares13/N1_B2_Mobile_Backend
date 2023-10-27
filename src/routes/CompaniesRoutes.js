import express from 'express';
import CompaniesController from '../controllers/CompaniesController';

const companiesRouter = express.Router();

companiesRouter
    .post("/company", CompaniesController.create)
    .get("/company", CompaniesController.list)

export default companiesRouter;