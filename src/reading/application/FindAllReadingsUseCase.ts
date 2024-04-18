import { Reading } from "../domain/Reading";
import { ReadingRepository } from "../domain/ReadingRepository";

export class FindAllReadingsUseCase {
    constructor(readonly readingRepository: ReadingRepository) {}

    async run(): Promise<Reading[]> {
        try {
            return await this.readingRepository.findAll();
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}