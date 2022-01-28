import { Request, Response } from 'express'
import {IUser} from "../../interfaces/IUser";
import {listUsers} from "./list-users";

export async function listUsersController(req: Request, res: Response){
    try{
        let users: IUser[];
        users = await listUsers();
        res.send({data: users});
    } catch(err){
        console.error(err);
        res.send(500, {message: "Stuff is busted"})
    }
}