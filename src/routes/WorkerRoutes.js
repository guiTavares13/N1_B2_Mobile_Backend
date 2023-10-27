import express from 'express';
import WorkerController from '../controllers/WorkerController';

const workerRouter = express.Router();

workerRouter
    .post("/worker", WorkerController.create)
    .get("/worker", WorkerController.list)

export default workerRouter;