import { Request, Response } from "express";
import { DeleteUserByIdUseCase } from "../../application/DeleteUserByIdUseCase";

export class DeleteUserByIdController {
    constructor(readonly deleteUserByIdUseCase: DeleteUserByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            await this.deleteUserByIdUseCase.run(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}