import mySqlConnection from "../../mysql/mysql-connection";
import {IInvite} from "../../interfaces/IInvite";

export async function listInvites(): Promise<IInvite[]>{
    let todosList: IInvite[] = [];
    let results: any;
    const queryString =
        `SELECT I.id, I.name, I.passcode, I.rsvp from Invite I`;

    results = await mySqlConnection.query(queryString);
    for(const result of results) {
        todosList.push({
            id: result.id,
            name: result.name,
            passcode: result.passcode,
            rsvp: result.rsvp
        })
    }
    return Promise.resolve(todosList);
}

