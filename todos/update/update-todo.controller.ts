import {Request, Response} from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {updateTodo} from "./update-todo";

export async function updateTodoController(req: Request, res: Response) {
    const todo: ITodo = await updateTodo(req.body);
    res.send({data: todo});
}