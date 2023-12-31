import express from "express";
import userRouter from "./UserRoutes.js";
import productTypesRouter from "./ProductTypesRoutes.js";
import productRouter from "./ProductsRoutes.js";
import companiesRouter from "./CompaniesRoutes.js";
import workerRouter from "./WorkerRoutes.js";
import appointmentRouter from "./AppointmentRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ Titulo: "N2-B1 Programação Mobile" });
});

router.use(
  express.json(),
  userRouter,
  productRouter,
  productTypesRouter,
  companiesRouter,
  workerRouter,
  appointmentRouter
);

export default router;
