
import express from 'express'
import UserController from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter
    .post("/user", UserController.create)
    .get("/user", UserController.list)

export default userRouter;


