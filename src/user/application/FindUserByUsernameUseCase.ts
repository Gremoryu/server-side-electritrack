import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class FindUserByUsernameUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(username: string): Promise<User[] | null> {
        return this.userRepository.findUserByUsername(username);
    }
}