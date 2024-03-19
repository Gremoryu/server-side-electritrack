import { Request, Response } from "express";
import { FindAllUseCase } from "../../application/FindAllUseCase";

export class FindAllController {
    constructor(readonly findAllUseCase: FindAllUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const users = await this.findAllUseCase.run();
            return res.status(200).send(users);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}