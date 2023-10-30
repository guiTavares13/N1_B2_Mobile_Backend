import express from 'express';
import AppointmentController from '../controllers/AppointmentController';

const appointmentRouter = express.Router();

appointmentRouter
    .post("/appointment", AppointmentController.create)
    .get("/appointment", AppointmentController.list)
    .get("/appointment/:id", AppointmentController.findByPk)
    .put("/appointment/:id", AppointmentController.put)
    .delete("/appointment/:id", AppointmentController.delete)

export default appointmentRouter;