import Appointment from "../models/Appointment";

const AppointmentController = {

    async create(req, res) {

        try {
            const appointment = await Appointment.create(req.body);
            return res.status(201).json(appointment);
        } catch (err) {
            return res.status(400).json({ error: err.message});
        }
    },

    async list(req, res) {

        try {
            const appointments = await Appointment.findAll();
            return res.status(200).json(appointments);
        } catch (err) {
            return res.status(400).json({ error:err.message});
        }
    }
}

export default AppointmentController;