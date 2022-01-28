import {IUser} from "../../interfaces/IUser";
import mySqlConnection from "../../mysql/mysql-connection";

export async function listUsers(): Promise<IUser[]> {
    let usersList: IUser[] = [];
    let results: any;
    const queryString = `select User.email as email, User.name as name from User`

    results = await mySqlConnection.query(queryString);
    for(const result of results) {
        usersList.push({
            email: result.email,
            name: result.name
        })
    }
        return Promise.resolve(usersList);
}