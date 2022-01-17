import {todos} from "../../data";
import {ITodo} from "../../interfaces/ITodo";
import * as uuid from 'uuid';

export async function deleteTodo(id: string): Promise<ITodo>{
    if(!uuid.validate(id)){ await Promise.reject({message: 'Invalid ID'})}
    const todo: ITodo = todos.find(todo => todo.id === id);
    if(!todo){await Promise.reject({message: 'Todo not found'})}
    return Promise.resolve(todo);
}