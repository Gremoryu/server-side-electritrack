import { Request, Response } from 'express';
import { FindUserByUsernameUseCase } from '../../application/FindUserByUsernameUseCase';

export class FindUserByUsernameController {
    constructor(readonly findUserByUsernameUseCase: FindUserByUsernameUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const username: string = req.params.username;
            const user = await this.findUserByUsernameUseCase.run(username);
            return res.status(200).send(user);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}