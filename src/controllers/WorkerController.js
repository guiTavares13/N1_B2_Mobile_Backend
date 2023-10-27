import Worker from '../models/Users.js'

const WorkerController = {

    async create(req, res) {

        try {
            const worker = Worker.create(req.body);
            return res.status(201).json(worker);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async list(req, res) {
        
        try {
            const workers = await Worker.findAll();
            return res.status(200).json(workers);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export default WorkerController;