import { Room } from "../domain/Room";
import { RoomRepository } from "../domain/RoomRepository";

export class SaveRoomUseCase {
    constructor(readonly roomRepository: RoomRepository) {}

    async run(room: Room): Promise<Room | null> {
        try {
            const roomExists = await this.roomRepository.findRoomById(room.id);
            if (roomExists) {
                throw new Error('Room already exists');
            }
            
            return await this.roomRepository.save(room);

        } catch (error) {
            return null;
        }

    }
}