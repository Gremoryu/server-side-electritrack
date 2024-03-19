import { User } from './User';

export interface UserRepository {
    save(user: User): Promise<User | null>;
    findUserByUsername(username: string): Promise<User | null>;
    findUserById(id: number): Promise<User | null>;
    findAllUsers(): Promise<User[] | null>;
    deleteUserById(id: number): Promise<void>;
    updateUser(id: number, user: User): Promise<User | null>;
}