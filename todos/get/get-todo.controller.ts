import { Request, Response } from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {getTodo} from "./get-todo";
import mySqlConnection from "../../mysql/mysql-connection";

export async function getTodoController(req: Request, res: Response) {
    try {
        const todo: ITodo = await getTodo(req.params.id);
        res.send({data: todo});
    } catch (err){
        console.error(err);
        res.send(500, {message: "Stuff is busted"});
    }
}