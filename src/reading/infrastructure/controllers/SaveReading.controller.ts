import { Request, Response } from "express";
import { SaveReadingUseCase } from "../../application/SaveReadingUseCase";

export class SaveReadingController {
    constructor(readonly saveReadingUseCase: SaveReadingUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const reading = req.body;
            await this.saveReadingUseCase.run(reading);
            return res.status(201).send();
        } catch (error: any) {
            return res.status(400).send(error.message);
        }
    }
}