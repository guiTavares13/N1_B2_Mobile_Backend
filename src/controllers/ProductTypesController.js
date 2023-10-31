import ProductTypes from "../models/ProductTypes.js";
import errorHandler from "../middlewares/errorHandler.js";
import { ValidationError } from "sequelize";

const ProductTypesController = {
    
    create: errorHandler(async (req, res) => {

        try {
            console.log("Corpo da requisição:", req.body);
            const productTypes = await ProductTypes.create(req.body);
            console.log(productTypes);
            return res.status(201).json(productTypes);
        } catch(error) {
            if(error instanceof ValidationError) {
                return res.status(400).json({ error: error.message });
            }
            throw error;
        }
    }),

    list: errorHandler(async (req, res) => {
        const productTypes = await ProductTypes.findAll();
        console.log(productTypes);
        return res.status(200).json(productTypes);
    }),
}

export default ProductTypesController;
