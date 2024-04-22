import { Router } from "express";

import { saveUserController } from "./dependencies";
import { findUserByIdController } from "./dependencies";
import { findUserByUsernameController } from "./dependencies";
import { findAllController } from "./dependencies";
import { deleteUserByIdController } from "./dependencies";
import { updateUserController } from "./dependencies";


const UserRouter = Router();

UserRouter
    .get('/', async (req, res) => {
        await findAllController.run(req, res);
    })
    .get('/:id', async (req, res) => {
        await saveUserController.run(req, res);
    })
    .get('/:id', async (req, res) => {
        await findUserByIdController.run(req, res);
    })
    .get('/:id', async (req, res) => {
        await findUserByUsernameController.run(req, res);
    })
    .delete('/:id', async (req, res)=>{
        await deleteUserByIdController.run(req, res)
    })
    .put('/:id', async (req, res) => {
        await updateUserController.run(req, res);
    });
    

export default UserRouter;