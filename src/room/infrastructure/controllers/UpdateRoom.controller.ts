import { Request, Response } from "express";
import { UpdateRoomUseCase } from "../../application/UpdateRoomUseCase";

export class UpdateRoomController {
    constructor(readonly updateRoomUseCase: UpdateRoomUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const { room } = req.body;
            await this.updateRoomUseCase.run(id, room);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}