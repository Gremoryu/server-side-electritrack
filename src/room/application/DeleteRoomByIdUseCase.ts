import { RoomRepository } from "../domain/RoomRepository";

export class DeleteRoomByIdUseCase {
    constructor(private repository: RoomRepository) {}

    async run(id: number): Promise<void> {
        await this.repository.deleteRoomById(id);
    }
}