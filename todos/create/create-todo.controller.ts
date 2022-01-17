import {Request, Response} from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {createTodo} from "./create-todo";

export async function createTodoController(req: Request, res: Response) {
    const todo: ITodo = await createTodo(req.body);
    res.send({data: todo});
}