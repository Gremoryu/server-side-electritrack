import { connection } from "../../database/db";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";

export class MysqlUserRepository implements UserRepository {
    async save(user: User): Promise<User | null> {
        const [result]: any = await connection.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [user.user, user.password]
        );
        return result;
    }

    async findUserByUsername(username: string): Promise<User | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM users WHERE user = ?",
            [username]
        );
        return rows[0];
    }

    async findUserById(id: number): Promise<User | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    async findAllUsers(): Promise<User[] | null> {
        const [rows]: any = await connection.query(
            "SELECT * FROM users"
        );
        return rows;
    }

    async deleteUserById(id: number): Promise<void> {
        await connection.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );
    }

    async updateUser(id: number, user: User): Promise<User | null> {
        const [result]: any = await connection.query(
            "UPDATE users SET username = ?, password = ? WHERE id = ?",
            [user.user, user.password, id]
        );
        return result;
    }
}
