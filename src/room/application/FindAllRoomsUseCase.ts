import { Room } from '../domain/Room';
import { RoomRepository } from '../domain/RoomRepository';

export class FindAllRoomsUseCase {
    constructor(readonly roomRepository: RoomRepository) {}

    async run(): Promise<Room[] | null> {
        try {
            const result = await this.roomRepository.findAllRooms();
            return result;
        } catch (error) {
            return null;
        }
    }
}