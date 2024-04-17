import { Room } from "../domain/Room";
import { RoomRepository } from "../domain/RoomRepository";

export class UpdateRoomUseCase {
    constructor(private repository: RoomRepository) {}

    async run(id: number, room: Room): Promise<Room | null> {
        return await this.repository.updateRoom(id, room);
    }
}