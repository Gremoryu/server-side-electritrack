import { Request, Response } from "express";
import { FindAllRoomsUseCase } from "../../application/FindAllRoomsUseCase";

export class FindAllRoomsController {
    constructor(readonly findAllRoomsUseCase: FindAllRoomsUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const rooms = await this.findAllRoomsUseCase.run();
            return res.status(200).send(rooms);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}