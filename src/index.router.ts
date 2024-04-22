import { Router, Request, Response } from "express";
import  RoomRouter  from "../src/room/infrastructure/RoomRouter";
import  UserRouter from "../src/user/infrastructure/UserRouter";
import  authRouter from "../src/auth/infraestructure/auth.router";
const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/User`, UserRouter)
indexRouter.use(`${prefijo}/Room`, RoomRouter);
indexRouter.use(`${prefijo}/auth`, authRouter);

export default indexRouter;