import mySqlConnection from "../../mysql/mysql-connection";

export async function deleteInvite(id: number): Promise<{message: string}>{
    const queryString = `DELETE FROM Invite WHERE invite.id = ${id}`;
    await mySqlConnection.query(queryString);
    return Promise.resolve({message: 'Invite YEEEEEETED!!!!'});
}
