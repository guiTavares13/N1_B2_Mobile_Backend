import express from 'express';
import Appointment from '../models/Appointment';
import AppointmentController from '../controllers/AppointmentController';

const appointmentRouter = express.Router();

appointmentRouter
    .post("/appointment", AppointmentController.create)
    .get("/appointment", AppointmentController.list)

export default appointmentRouter;