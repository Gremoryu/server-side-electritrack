import { Router } from "express";
import {
  loginAuthController,
  registerAuthController,
  verifyTokenService,
} from "./auth.dependencies";

const authRouter = Router();

authRouter.post(
  "/login",
  /* verifyTokenService.run.bind(verifyTokenService), */
  loginAuthController.run.bind(loginAuthController)
);
authRouter.post(
  "/register",
  registerAuthController.run.bind(registerAuthController)
);

export default  authRouter;
