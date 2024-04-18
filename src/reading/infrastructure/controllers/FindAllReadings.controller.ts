import { Request, Response } from 'express';
import { FindAllReadingsUseCase } from '../../application/FindAllReadingsUseCase';

export class FindAllReadingsController {
    constructor(readonly findAllReadingsUseCase: FindAllReadingsUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const readings = await this.findAllReadingsUseCase.run();
            return res.status(200).send(readings);
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}