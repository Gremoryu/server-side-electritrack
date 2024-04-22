import { User } from "../../../user/domain/User";
import { UserRepository } from "../../../user/domain/UserRepository";
import { AuthResponse } from "../../domain/entities";
import { createContrasenaHash, createJwt } from "../utils";

export class RegisterAuthService {
  constructor(private readonly userRepository: UserRepository) { }
  async run(user1: User): Promise<AuthResponse> {
    try {

        const isUserCreated = await this.existingUser(user1.user);
        if (!isUserCreated) {
          const password = createContrasenaHash(user1.password);
          const newUser = {
            ...user1,
            password,
          };
          const responseUser: any = await this.userRepository.save(newUser);
          const jwt = createJwt(responseUser)
          const responseToken: AuthResponse = {
            token: jwt
          };
          return responseToken;
        
      }
      throw "No se logro crear por un error en la validacion de los datos"
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }

  private async existingUser(user: string): Promise<boolean> {
    const existingUser = await this.userRepository.findUserByUsername(user);
    if (existingUser) return true;
    return false;
  }
}
