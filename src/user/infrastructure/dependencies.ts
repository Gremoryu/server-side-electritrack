// Use Cases
import { DeleteUserByIdUseCase } from "../application/DeleteUserByIdUseCase";
import { FindAllUseCase } from "../application/FindAllUseCase";
import { FindUserByIdUseCase } from "../application/FindUserByIdUseCase";
import { FindUserByUsernameUseCase } from "../application/FindUserByUsernameUseCase";
import { SaveUserUseCase } from "../application/SaveUserUseCase";
import { UpdateUserUseCase } from "../application/UpdateUserUseCase";

// Controllers
import { DeleteUserByIdController } from "./controllers/DeleteUserById.controller";
import { FindAllController } from "./controllers/FindAll.controller";
import { FindUserByIdController } from "./controllers/FindUserById.controller";
import { FindUserByUsernameController } from "./controllers/FindUserByUsername.controller";
import { SaveUserController } from "./controllers/SaveUser.controller";
import { UpdateUserController } from "./controllers/UpdateUser.controller";

// Repositories

import { MysqlUserRepository } from "./MysqlUserRepository";

export const mySqlUserRepository = new MysqlUserRepository();
export const saveUserUseCase = new SaveUserUseCase(mySqlUserRepository);
export const findUserByIdUseCase = new FindUserByIdUseCase(mySqlUserRepository);
export const findUserByUsernameUseCase = new FindUserByUsernameUseCase(mySqlUserRepository);
export const findAllUseCase = new FindAllUseCase(mySqlUserRepository);
export const deleteUserByIdUseCase = new DeleteUserByIdUseCase(mySqlUserRepository);
export const updateUserUseCase = new UpdateUserUseCase(mySqlUserRepository);

export const saveUserController = new SaveUserController(saveUserUseCase);
export const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);
export const findUserByUsernameController = new FindUserByUsernameController(findUserByUsernameUseCase);
export const findAllController = new FindAllController(findAllUseCase);
export const deleteUserByIdController = new DeleteUserByIdController(deleteUserByIdUseCase);
export const updateUserController = new UpdateUserController(updateUserUseCase);
