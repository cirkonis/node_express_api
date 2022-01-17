import { Request, Response } from 'express'
import {deleteTodo} from "./delete-todo";

export async function deleteTodoController(req: Request, res: Response) {
    try {
        await deleteTodo(req.params.id);
    } catch(error){
        res.send(error)
    } finally {
        res.send({data: {message: `Todo with id ${req.params.id} "Deleted"`}});
    }
}