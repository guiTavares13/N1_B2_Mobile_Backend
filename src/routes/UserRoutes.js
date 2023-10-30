
import express from 'express'
import UserController from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter
    .post("/login", UserController.login)
    .post("/user", UserController.create)
    .get("/user", UserController.list)
    .put("/user/:id", UserController.put)
    .get("/user/:id", UserController.findByPk)
    .delete("/user/:id", UserController.delete)

export default userRouter;


