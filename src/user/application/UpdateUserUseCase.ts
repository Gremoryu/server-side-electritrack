import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UpdateUserUseCase {
    constructor(private repository: UserRepository) {}

    async run(id: number, user: User): Promise<User | null> {
        return await this.repository.updateUser(id, user);
    }
}
