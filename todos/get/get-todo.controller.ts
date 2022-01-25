import {NextFunction, Request, Response} from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {getTodo} from "./get-todo";
import TodoNotFoundException from "../../exceptions/TodoNotFoundException";

export async function getTodoController(req: Request, res: Response, next: NextFunction) {
        const todo: ITodo = await getTodo(req.params.id);
        todo ? res.send({data: todo}) : next(new TodoNotFoundException(req.params.id));
}