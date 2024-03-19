import { Request, Response } from 'express';
import { FindUserByIdUseCase } from '../../application/FindUserByIdUseCase';

export class FindUserByIdController {
    constructor(readonly findUserByIdUseCase: FindUserByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const user = await this.findUserByIdUseCase.run(id);
            return res.status(200).send(user);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}