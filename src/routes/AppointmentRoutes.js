import express from 'express';
import AppointmentController from '../controllers/AppointmentController.js';

const appointmentRouter = express.Router();

appointmentRouter
    .post("/appointment", AppointmentController.create)
    .get("/appointment", AppointmentController.list)
    .get("/appointment/:product_id", AppointmentController.findByProduct)
    .get("/appointment/:user_id", AppointmentController.findByUser)
    .get("/appointment/:worker_id", AppointmentController.findByWorker)
    .get("/appointment/:id", AppointmentController.findByPk)
    .put("/appointment/:id", AppointmentController.put)
    .delete("/appointment/:id", AppointmentController.delete)

export default appointmentRouter;