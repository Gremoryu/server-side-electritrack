import { Room } from "./Room";

export interface RoomRepository {
    save(room: Room): Promise<Room | null>;
    findRoomById(id: number): Promise<Room | null>;
    findAllRooms(): Promise<Room[] | null>;
    deleteRoomById(id: number): Promise<void>;
    updateRoom(id: number, room: Room): Promise<Room | null>;
}