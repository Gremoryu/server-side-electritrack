//Use Cases
import { DeleteRoomByIdUseCase } from "../application/DeleteRoomByIdUseCase";
import { FindAllRoomsUseCase } from "../application/FindAllRoomsUseCase";
import { SaveRoomUseCase } from "../application/SaveRoomUseCase";
import { UpdateRoomUseCase } from "../application/UpdateRoomUseCase";

// Controllers
import { DeleteRoomByIdController } from "./controllers/DeleteRoomById.controller";
import { FindAllRoomsController } from "./controllers/FindAllRooms.controller";
import { SaveRoomController } from "./controllers/SaveRoom.controller";
import { UpdateRoomController } from "./controllers/UpdateRoom.controller";

// Repositories

import { MysqlRoomRepository } from "./MysqlRoomRepository";

export const mySqlRoomRepository = new MysqlRoomRepository();
export const saveRoomUseCase = new SaveRoomUseCase(mySqlRoomRepository);
export const findAllRoomsUseCase = new FindAllRoomsUseCase(mySqlRoomRepository);
export const deleteRoomByIdUseCase = new DeleteRoomByIdUseCase(mySqlRoomRepository);
export const updateRoomUseCase = new UpdateRoomUseCase(mySqlRoomRepository);

export const saveRoomController = new SaveRoomController(saveRoomUseCase);
export const findAllRoomsController = new FindAllRoomsController(findAllRoomsUseCase);
export const deleteRoomByIdController = new DeleteRoomByIdController(deleteRoomByIdUseCase);
export const updateRoomController = new UpdateRoomController(updateRoomUseCase);