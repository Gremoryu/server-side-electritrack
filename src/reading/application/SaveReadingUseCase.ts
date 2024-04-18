import {Reading} from "../domain/Reading";
import {ReadingRepository} from "../domain/ReadingRepository";

export class SaveReadingUseCase {
    constructor(readonly readingRepository: ReadingRepository) {}

    async run(reading: Reading): Promise<Reading | null> {
        try {
            return await this.readingRepository.save(reading);

        } catch (error) {
            return null;
        }

    }
}