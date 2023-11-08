import Worker from '../models/Worker.js';
import errorHandler from "../middlewares/errorHandler.js";

const WorkerController = {

    create: errorHandler(async (req, res) => {
        const worker = await Worker.create(req.body);
        return res.status(201).json(worker);
    }),

    list: errorHandler(async (req, res) => {
        const workers = await Worker.findAll();
        console.log(workers);
        return res.status(200).json(workers);
    }),


    findByPk: errorHandler(async (req, res) => {
        const worker = await Worker.findByPk(req.params.id);
        if (!worker) {
            return res.status(404).json({ error: "Worker not found" });
        }
        return res.status(200).json(worker);
    }),

    update: errorHandler(async (req, res) => {
        const worker = await Worker.findByPk(req.params.id);
        if (!worker) {
            return res.status(404).json({ error: "Worker not found" });
        }

        await worker.update(req.body);
        return res.status(200).json(worker);
    }),

    delete: errorHandler(async (req, res) => {
        const worker = await Worker.findByPk(req.params.id);
        if (!worker) {
            return res.status(404).json({ error: "Worker not found" });
        }

        await worker.destroy();
        return res.status(204).json();
    })

}

export default WorkerController;
