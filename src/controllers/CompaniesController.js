import Companies from "../models/Companies";

const CompaniesController = {

    async create(req, res) {

        try {
            const company = await Companies.create(req.body);
            return res.status(201).json(company);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async list(req, res) {
        
        try {
            const companies = await Companies.findAll();
            return res.status(200).json(companies);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    
}

export default CompaniesController;