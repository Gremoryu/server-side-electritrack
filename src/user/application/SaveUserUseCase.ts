import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class SaveUserUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(user: User): Promise<User[] | null> {
        try {
            const userExists = await this.userRepository.findUserByUsername(user.user);
            if (userExists) {
                throw new Error('User already exists');
            }
            
            return await this.userRepository.save(user);

        } catch (error) {
            return null;
        }

    }
}
