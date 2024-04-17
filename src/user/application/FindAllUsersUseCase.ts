import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class FindAllUsersUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(): Promise<User[] | null> {
        try {
            const result = await this.userRepository.findAllUsers();
            return result;
        } catch (error) {
            return null;
        }
    }
}