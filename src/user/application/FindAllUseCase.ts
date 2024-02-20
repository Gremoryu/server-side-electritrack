import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class FindAllUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(): Promise<User[] | null> {
        try {
            return await this.userRepository.findAllUsers();
        } catch (error) {
            return null;
        }
    }
}