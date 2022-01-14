import {todos} from "../../data";
import {ITodo} from "../../interfaces/ITodo";

export async function updateTodo(todo: ITodo): Promise<ITodo>{
    let todoToUpdate: ITodo = todos.find(todo => todo.id === todo.id);
    if(!todoToUpdate) { return Promise.reject({Message: "Todo not found"})}
    return Promise.resolve(todo);
}