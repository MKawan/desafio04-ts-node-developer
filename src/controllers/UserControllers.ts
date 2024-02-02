import {Request, Response} from 'express';
import { UserServerces } from '../Services/UserServices';


export class UserControllers{

    userService: UserServerces

    constructor(
        userService = new UserServerces()
    ){
        this.userService = userService
    }
    //Rota criar usuario
    createUser =  (req: Request, res: Response) => {
       
        const user = req.body;

        //validação para nome autorizar não vazio
        if(!user.name){
            return res.status(400).json({message: 'Bad request name mandatory'})
        }
        //validação para email autorizar não vazio
        if(!user.email){
            return res.status(400).json({message: 'Bad request email mandatory'})
        }
        

        this.userService.createUser(user.name, user.email);
        return res.status(201).json({message: "user create"});
    }

    //Chamada da lista de usuarios
    getAllUser = (req: Request, res: Response) =>{

        const users = this.userService.getAllUser()
        return res.status(200).json(users)
    }
    deleteAllUser = (req: Request, res: Response) => {
        return res.status(200).json({message: 'usuario deletado'});
    }
}