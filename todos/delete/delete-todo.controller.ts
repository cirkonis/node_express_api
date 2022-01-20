import { Request, Response } from 'express'
import {deleteTodo} from "./delete-todo";

export async function deleteTodoController(req: Request, res: Response) {
    try {
        const success: {message: string} = await deleteTodo(req.params.id);
        res.send(success);
    } catch (err){
        console.error(err)
        res.send(500, {message: 'stuff is busted'});
    }
}