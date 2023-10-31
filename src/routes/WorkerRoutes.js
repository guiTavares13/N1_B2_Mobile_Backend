import express from 'express';
import WorkerController from '../controllers/WorkerController.js';

const workerRouter = express.Router();

workerRouter
    .post("/worker", WorkerController.create)
    .get("/worker", WorkerController.list)

export default workerRouter;