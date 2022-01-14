import { Request, Response } from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {getTodo} from "./get-todo";

export async function getTodoController(req: Request, res: Response) {
    const todo: ITodo = await getTodo(req.params.id);
    res.send({data: todo});
}