import { Response, Request, NextFunction } from "express";
import { TokenRepository } from "../../domain/repository/TokenRepository";
import { MysqlUserRepository } from "../../../user/infrastructure/MysqlUserRepository";

export class VerifyTokenService {
  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly mysqlUserRepository: MysqlUserRepository
  ) { }
  async run(req: Request, res: Response, next: NextFunction) {
    try {
      const especialistaPrem = await this. mysqlUserRepository.findUserByUsername(
        req.body.user
      );
      if (especialistaPrem) {
        return res.status(401).send({ message: "No tienes permisos" });
      }
      let token = req.get("Authorization");
      if (token) {
        token = token.substring(7);
        this.tokenRepository.verifyToken(token);
        next();
      } else {
        return res.status(401).send({ message: "Token inexistente" });
      }
    } catch (err: any) {
      return res.status(401).send({
        message: "Token invalido",
        error: err.message,
      });
    }
  }
}
