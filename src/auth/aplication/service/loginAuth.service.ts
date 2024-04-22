import {User} from "../../../user/domain/User";
import { UserRepository } from "../../../user/domain/UserRepository";
import { AuthResponse } from "../../domain/entities";
import bcrypt from "bcrypt";
import { createJwt } from "../utils/createJWT.util";

export class LoginAuthService {
  constructor(private readonly userRepository: UserRepository) {}
  async run(user1: User): Promise<AuthResponse> {
    try {
        const response = await this.userRepository.findUserByUsername(user1.user);
        if (!response) {
          throw new Error("User not found");
        }
        const isPasswordValid = this.compareCredentials(
          user1,
          response.password
        );
        if (isPasswordValid) {
          const jwt = createJwt(user1);
          let responseToken: AuthResponse = {
            token: jwt,
            user: response.user,
            password: response.password,
          };
          return responseToken;
        }
        throw new Error(`Usuario o contraseña no validas`);
      }
      catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }

  private compareCredentials(user1: User, passwordRequest: string): boolean {
    const correctPassword = bcrypt.compareSync(user1.user, passwordRequest);
    return correctPassword;
  }
}
