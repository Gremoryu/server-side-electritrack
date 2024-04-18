import { Request, Response } from 'express';
import { DeleteRoomByIdUseCase } from '../../application/DeleteRoomByIdUseCase';

export class DeleteRoomByIdController {
    constructor(readonly deleteRoomByIdUseCase: DeleteRoomByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id: number= parseInt(req.params.id);
            await this.deleteRoomByIdUseCase.run(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}