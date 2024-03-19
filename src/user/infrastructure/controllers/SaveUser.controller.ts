import { Request, Response } from "express";
import { SaveUserUseCase } from "../../application/SaveUserUseCase";

export class SaveUserController {
  constructor(readonly saveUserUseCase: SaveUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const user = req.body;
      await this.saveUserUseCase.run(user);
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).send(error.message);
    }
  }
}
