import Companies from "../models/Companies";
import errorHandler from "../middlewares/errorHandler.js";

const CompaniesController = {

    create: errorHandler(async (req, res) => {
        const company = await Companies.create(req.body);
        return res.status(201).json(company);
    }),

    list: errorHandler(async (req, res) => {
        const companies = await Companies.findAll({ attributes: { exclude: ['password'] } });
        return res.status(200).json(companies);
    }),

    findByPk: errorHandler(async (req, res) => {
        const company = await Companies.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        return res.status(200).json(company);
    }),

    update: errorHandler(async (req, res) => {
        const company = await Companies.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        
        await company.update(req.body);
        return res.status(200).json(company);
    }),

    delete: errorHandler(async (req, res) => {
        const company = await Companies.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        
        await company.destroy();
        return res.status(204).json();
    })

}

export default CompaniesController;
