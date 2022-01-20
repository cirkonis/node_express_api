import {ITodo} from "../../interfaces/ITodo";
import mySqlConnection from "../../mysql/mysql-connection";

let todosList: ITodo[] = [];
let results: any[] = [];

export async function listTodos(): Promise<ITodo[]>{
    const queryString =
`SELECT T.id, category.category, status.status, T.title, T.description, assignee.name as assignee_name, assignee.email as assignee_email, assigned.name as assigned_name, assigned.email as assigned_email, date_added, date_completed from Todo T
JOIN Status status on T.status = status.id
JOIN Category category on category.id = T.category
JOIN User assignee on assignee.email = T.assignee
JOIN User assigned on assigned.email = T.assigned`;
        // @ts-ignore
        results = await mySqlConnection.query(queryString);
        for(const result of results) {
            todosList.push({
                id: result.id,
                title: result.title,
                description: result.description,
                category: result.category,
                status: result.status,
                assignee: {
                    name: result.assignee_name,
                    email: result.assignee_email,
                },
                assigned: {
                    name: result.assigned_name,
                    email: result.assigned_email,
                },
                dateAdded: "date",
                dateCompleted: "date"
            })
        }
                return Promise.resolve(todosList);
            }

