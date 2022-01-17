import {ITodo} from "../../interfaces/ITodo";
import { v4 as uuidv4 } from 'uuid';

export async function createTodo(todo: ITodo): Promise<ITodo>{
    const todoToCreate = {
        id: uuidv4(),
        ... todo
    } ;
    return Promise.resolve(todoToCreate);
}