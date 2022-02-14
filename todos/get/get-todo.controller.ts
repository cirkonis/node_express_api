import { Request, Response } from 'express'
import {getTodo} from "./get-todo";
import {ITodo} from "../../interfaces/ITodo";

export async function getTodoController(req: Request, res: Response) {
    try {
        const todo: ITodo = await getTodo(req.params.id);
        res.send({data: todo});
    } catch (err){
        console.error(err);
        res.send(500, {message: "Stuff is busted"});
    }
}
