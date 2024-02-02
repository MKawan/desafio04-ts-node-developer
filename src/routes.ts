import { Router, Request, Response } from "express";
import { UserControllers } from "./controllers/UserControllers";

export const router = Router();

const userControllers = new UserControllers()


        /* Criando rotas */

//gets
router.get('/user', userControllers.getAllUser)


//posts
router.post('/user', userControllers.createUser);


//delete
router.delete('/user', userControllers.deleteAllUser);