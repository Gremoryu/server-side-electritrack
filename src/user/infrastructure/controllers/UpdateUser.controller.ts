import { Request, Response } from 'express';
import { UpdateUserUseCase } from '../../application/UpdateUserUseCase';

export class UpdateUserController {
    constructor(readonly updateUserUseCase: UpdateUserUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const user = req.body;
            await this.updateUserUseCase.run(id, user);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}