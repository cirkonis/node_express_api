import mySqlConnection from "../../mysql/mysql-connection";
import {ITodo} from "../../interfaces/ITodo";

export async function updateTodo(todo: ITodo): Promise<{message: string}>{
    const statusId = await mySqlConnection.query(`SELECT Status.id as status_id from Status where Status.status = '${todo.status}';`)
    const queryString =
`
UPDATE Todo
SET
status = '${statusId[0].status_id}',
category = '${todo.category}',
assignee = '${todo.assignee.email}',
assigned = '${todo.assigned.email}',
title = '${todo.title}',
description = '${todo.description}',
date_added = CURRENT_DATE(),
date_completed = CURRENT_DATE()
WHERE Todo.id = '${todo.id}'
`
    await mySqlConnection.query(queryString);
    return Promise.resolve({message: "TODO Updated"});
}
