import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class DeleteUserByIdUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(id: number): Promise<void> {
        try {
            await this.userRepository.deleteUserById(id);
        } catch (error) {
            throw new Error('User not found');
        }
    }
}
