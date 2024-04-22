import { MysqlUserRepository } from "../../user/infrastructure/MysqlUserRepository";
import { VerifyTokenService } from "../aplication/middlewares/verifyToken.middleware";
import { LoginAuthService, RegisterAuthService } from "../aplication/service";
import { LoginAuthController } from "./controllers/loginAuth.controller";
import { RegisterAuthController } from "./controllers/registerAuth.controller";
import { TokenPort } from "./ports/token.port";

const mysqlRepository = new MysqlUserRepository();
const tokenRepository = new TokenPort();

const loginAuthService = new LoginAuthService(mysqlRepository);
const registerAuthService = new RegisterAuthService(mysqlRepository);
export const verifyTokenService = new VerifyTokenService(
  tokenRepository,
  mysqlRepository
);

export const loginAuthController = new LoginAuthController(loginAuthService);
export const registerAuthController = new RegisterAuthController(
  registerAuthService
);
