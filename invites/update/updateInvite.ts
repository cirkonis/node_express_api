import mySqlConnection from "../../mysql/mysql-connection";
import {IInvite} from "../../interfaces/IInvite";

export async function updateInvite(invite: IInvite): Promise<{message: string}>{
    const queryString = `UPDATE Invite SET name = '${invite.name}', passcode = '${invite.passcode}', rsvp = ${invite.rsvp} WHERE Invite.id = ${invite.id}`
    await mySqlConnection.query(queryString);
    return Promise.resolve({message: "TODO Updated"});
}
