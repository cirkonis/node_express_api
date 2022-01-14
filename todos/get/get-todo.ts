import {todos} from "../../data";
import {ITodo} from "../../interfaces/ITodo";
import * as uuid from 'uuid';

export async function getTodo(id: string): Promise<ITodo>{
    if(!uuid.validate(id)){ await Promise.reject({message: 'Invalid ID'})}
    const todo = todos.find(todo => todo.id === id);
    return Promise.resolve(todo);
}