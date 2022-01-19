import {ITodo} from "../../interfaces/ITodo";
import mySqlConnection from "../../mysql/mysql-connection";

let todo: ITodo;
let result: any;

export async function getTodo(id: string): Promise<ITodo>{
    const todoId = id.replace(/"/g, "'");
    const queryString =
        `SELECT T.id, category.category, status.status, T.title, T.description, assignee.name as assignee_name, assignee.email as assignee_email, assigned.name as assigned_name, assigned.email as assigned_email, date_added, date_completed from Todo T
JOIN Status status on T.status = status.id
JOIN Category category on category.id = T.category
JOIN User assignee on assignee.email = T.assignee
JOIN User assigned on assigned.email = T.assigned
WHERE T.id = '${todoId}'
`;
    try {
        result = await mySqlConnection.query(queryString);
        console.log(result);
        await mySqlConnection.end();
    }catch (err) {
        console.error(err)
    }
        todo = {
            id: result[0].id,
            title: result[0].title,
            description: result[0].description,
            category: result[0].category,
            status: result[0].status,
            assignee: {
                name: result[0].assignee_name,
                email: result[0].assignee_email,
            },
            assigned: {
                name: result[0].assigned_name,
                email: result[0].assigned_email,
            },
            dateAdded: "date",
            dateCompleted: "date"
        }
    return Promise.resolve(todo);
}

