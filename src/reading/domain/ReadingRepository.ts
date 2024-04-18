import { Reading } from './Reading';

export interface ReadingRepository {
    save(reading: Reading): Promise<Reading | null>;
    findAll(): Promise<Reading[]>;
}