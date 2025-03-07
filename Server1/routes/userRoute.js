import { Router } from "express";
import { getUsers,createUser } from "../controller/userController.js";


const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/users/:id");

userRouter.post("/users", createUser );

userRouter.put("/users/:id");

userRouter.delete("/users/:id");

export default userRouter;