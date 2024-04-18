import { connection } from "../../database/db";
import { RoomRepository } from "../domain/RoomRepository";
import { Room } from "../domain/Room";

export class MysqlRoomRepository implements RoomRepository {
    async save(room: Room): Promise<Room | null> {
        const [result]: any = await connection.query(
            "INSERT INTO rooms (name, device_id) VALUES (?, ?)",
            [room.name, room.device_id]
        );
        return result;
    }

    async findRoomByName(name: string): Promise<Room | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM rooms WHERE name = ?",
            [name]
        );
        return rows[0];
    }

    async findRoomById(id: number): Promise<Room | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM rooms WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    async findAllRooms(): Promise<Room[] | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM rooms"
        );
        return rows;
    }

    async deleteRoomById(id: number): Promise<void> {
        await connection.query(
            "DELETE FROM rooms WHERE id = ?",
            [id]
        );
    }

    async updateRoom(id: number, room: Room): Promise<Room | null> {
        const [result]: any = await connection.query(
            "UPDATE rooms SET name = ? WHERE id = ?",
            [room.name, id]
        );
        return result;
    }
}