import { Request, Response } from "express";
import { FindAllUsersUseCase } from "../../application/FindAllUsersUseCase";

export class FindAllUsersController {
    constructor(readonly findAllUseCase: FindAllUsersUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const users = await this.findAllUseCase.run();
            return res.status(200).send(users);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}