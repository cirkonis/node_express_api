import mySqlConnection from "../../mysql/mysql-connection";
import {IInvite} from "../../interfaces/IInvite";

let todoToCreate: IInvite;
export async function createInvite(invite: IInvite): Promise<IInvite> {
    const queryString = `INSERT INTO Invite(name, passcode, rsvp) VALUES ('${invite.name}','${invite.passcode}',${invite.rsvp})`
    await mySqlConnection.query(queryString);
    return Promise.resolve(todoToCreate);
}
