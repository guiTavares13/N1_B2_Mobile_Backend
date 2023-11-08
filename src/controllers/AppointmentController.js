import Appointment from "../models/Appointment.js";
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

    findByProduct: errorHandler(async (req, res) => {
        const { id } = req.params;
        const appointment = await Appointment.findAll({
            where: { product_id: id },
        });

        console.log(`Agendamentos do produto ${id}: `, appointment);

        if(!appointment || appointment.length === 0) {
            return res.status(404).json({ error: `Nenhum agendamento encontrado associado ao produto ${id}` });
        }

        return res.status(200).json(appointment);
    }),

    findByUser: errorHandler(async (req, res) => {
        const { user_id } = req.params;
        console.log("AQUIIIIIIIIII", user_id);
        const appointment = await Appointment.findAll({
            where: { user_id: user_id },
        });

        console.log(`Agendamentos do usuário ${user_id}: `, appointment);

        if(!appointment || appointment.length === 0) {
            console.log("ruim", appointment);
            return res.status(404).json({ error: `Nenhum agendamento encontrado associado ao usuário ${id}` });
        }
        console.log("BOMMM", appointment);
        return res.status(200).json(appointment);
    }),

    findByPk: errorHandler(async (req, res) => {
        const { id } = req.params;
        const appointment = await findAppointment(id);
        return res.status(200).json(appointment);
    }),

    findByWorker: errorHandler(async (req, res) => {
        const id = req.params;
        const appointment = await Appointment.findAll({
            where: { worker_id: id },
        });

        console.log(`Agendamentos do funcionario ${id}: `, appointment);

        if(!appointment || appointment.length === 0) {
            return res.status(404).json({ error: `Nenhum agendamento encontrado associado ao trabalhador ${id}` });
        }

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
