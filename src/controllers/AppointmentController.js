import Appointment from "../models/Appointment";
import errorHandler from "../middlewares/errorHandler.js";

const findAppointment = async (id) => {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
        throw new Error("Agendamento não encontrado.");
    }
    return appointment;
};

const AppointmentController = {

    create: errorHandler(async (req, res) => {
        const appointment = await Appointment.create(req.body);
        return res.status(201).json(appointment);
    }),

    list: errorHandler(async (req, res) => {
        const appointments = await Appointment.findAll();
        return res.status(200).json(appointments);
    }),

    findByPk: errorHandler(async (req, res) => {
        const { id } = req.params;
        const appointment = await findAppointment(id);
        return res.status(200).json(appointment);
    }),

    put: errorHandler(async (req, res) => {
        const { id } = req.params;
        const appointment = await findAppointment(id);
        const updateAppointment = await appointment.update(req.body);
        return res.status(200).json(updateAppointment);
    }),

    delete: errorHandler(async (req, res) => {
        const { id } = req.params;
        const appointment = await findAppointment(id);
        await appointment.destroy();
        return res.status(200).json({ message: "Agendamento deletado com sucesso." });
    })

}

export default AppointmentController;
