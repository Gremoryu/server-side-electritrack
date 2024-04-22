import { Router } from "express";

import { deleteRoomByIdController } from "./dependencies";
import { findAllRoomsController } from "./dependencies";
import { saveRoomController } from "./dependencies";
import { updateRoomController } from "./dependencies";


const RoomRouter = Router();

RoomRouter
    .get('/', async (req, res) => {
        await findAllRoomsController.run(req, res);
    })
    .get('/:id', async (req, res) => {
        await saveRoomController.run(req, res);
    })
    .delete('/:id', async (req, res)=>{
        await deleteRoomByIdController.run(req, res)
    })
    .put('/:id', async (req, res) => {
        await updateRoomController.run(req, res);
    });
    

export default RoomRouter;