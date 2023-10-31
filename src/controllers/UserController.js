import User from "../models/Users.js";
import errorHandler from "../middlewares/errorHandler.js";
import { ValidationError } from 'sequelize';



const findUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("Usuário não encontrado.");
    }
    return user;
};

const UserController = {

    login: errorHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await user.checkPassword(password))) {
            return res.status(401).json({ error: "Email ou senha incorretos." });
        }
        console.log(user);
        const token = user.generateToken();
        return res.status(200).json({ token, data: user });
    }),

    create: errorHandler(async (req, res) => {
        try {
            console.log("Corpo da requisição:", req.body);
            const user = await User.create(req.body);
            console.log(user);
            return res.status(201).json(user);
        } catch (error) {
            if (error instanceof ValidationError) {
                return res.status(400).json({ error: error.message });
            }
            throw error;
        }
    }),

    list: errorHandler(async (req, res) => {
        const users = await User.findAll();
        return res.status(200).json(users);
    }),

    findByPk: errorHandler(async (req, res) => {
        const { id } = req.params;
        const user = await findUser(id);
        return res.status(200).json(user);
    }),

    put: errorHandler(async (req, res) => {
        const { id } = req.params;
        const user = await findUser(id);
        const updateUser = await user.update(req.body);
        return res.status(200).json(updateUser);
    }),

    delete: errorHandler(async (req, res) => {
        const { id } = req.params;
        const user = await findUser(id);
        await user.destroy();
        return res.status(200).json({ message: "Usuário deletado com sucesso." });
    })
};

export default UserController;
