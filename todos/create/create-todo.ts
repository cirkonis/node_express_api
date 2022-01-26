import {ITodo} from "../../../shared/interfaces/ITodo";
import { v4 as uuidv4 } from 'uuid';
import mySqlConnection from "../../mysql/mysql-connection";

let todoToCreate: ITodo;
    export async function createTodo(todo: ITodo): Promise<ITodo> {
        const statusId = await mySqlConnection.query(`SELECT Status.id as status_id from Status where Status.status = '${todo.status}';`)
        todoToCreate = {
            id: uuidv4(),
            ...todo
        }
        const queryString = `INSERT INTO Todo(id, status, category, assignee, assigned, title, description, date_added, date_completed)
VALUES (
'${todoToCreate.id}',
'${statusId[0].status_id}',
'${todoToCreate.category}',
'${todoToCreate.assignee.email}',
'${todoToCreate.assigned.email}',
'${todoToCreate.title}',
'${todoToCreate.description}',
CURRENT_DATE(),
CURRENT_DATE()
)`
        await mySqlConnection.query(queryString);
        return Promise.resolve(todoToCreate);
}
