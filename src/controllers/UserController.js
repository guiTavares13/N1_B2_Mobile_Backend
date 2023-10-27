import User from "../models/Users.js";

const UserController = {

    async create(req, res) {

        try {
            const user = await User.create(req.body);
            console.log(req.body)
            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async list(req, res) {

        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export default UserController;



