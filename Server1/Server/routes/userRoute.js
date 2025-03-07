import { Router } from "express";
import { getUsers } from "../controller/userController";

const userRouter = Router();

userRouter.get("/users", getUsers);

userRouter.get("/users/:id");

userRouter.post("/users");

userRouter.put("/users/:id");

userRouter.delete("/users/:id");

export default userRouter;