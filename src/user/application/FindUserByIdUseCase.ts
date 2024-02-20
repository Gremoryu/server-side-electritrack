import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class FindUserByIdUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(id: number): Promise<User[] | null> {
        try {
            return await this.userRepository.findUserById(id);
        } catch (error) {
            return null;
        }
    }
}
