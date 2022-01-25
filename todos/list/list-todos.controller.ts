import { Request, Response } from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {listTodos} from "./list-todos";

export async function listTodosController(req: Request, res: Response) {
    try {
        let todos: ITodo[];
        todos = await listTodos();
        res.send({data: todos});
    }catch (err) {
        console.error(err);
        res.send(500, {message: "Stuff is busted"});
    }
}
