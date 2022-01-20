import mySqlConnection from "../../mysql/mysql-connection";

export async function deleteTodo(id: string): Promise<{message: string}>{
    const todoId = id.replace(/"/g, "'");
    const queryString =
        `DELETE FROM Todo WHERE Todo.id = '${todoId}'
`;
    await mySqlConnection.query(queryString);
    return Promise.resolve({message: 'TODO YEEEEEETED!!!!'});
}