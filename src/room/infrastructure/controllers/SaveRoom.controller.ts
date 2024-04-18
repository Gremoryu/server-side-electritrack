import { Request, Response } from "express";
import { SaveRoomUseCase } from "../../application/SaveRoomUseCase";

export class SaveRoomController {
  constructor(readonly saveRoomUseCase: SaveRoomUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const room = req.body;
      await this.saveRoomUseCase.run(room);
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).send(error.message);
    }
  }
}