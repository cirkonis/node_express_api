import {Request, Response} from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {createTodo} from "./create-todo";

export async function createTodoController(req: Request, res: Response) {
    try {
        const todo: ITodo = await createTodo(req.body);
        res.send(todo);
    } catch(err){
        res.send(500, {message: 'stuff is busted'});
    }
}