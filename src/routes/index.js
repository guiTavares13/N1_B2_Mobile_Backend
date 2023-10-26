import express from "express";
import userRouter from "./UserRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ Titulo: "N2-B1 Programação Mobile" });
});

router.use(
  express.json(),
  userRouter,
);

export default router;
