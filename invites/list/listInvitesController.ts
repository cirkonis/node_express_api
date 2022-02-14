import { Request, Response } from 'express'
import {ITodo} from "../../interfaces/ITodo";
import {listInvites} from "./listInvites";
import {IInvite} from "../../interfaces/IInvite";

export async function listInvitesController(req: Request, res: Response) {
    try {
        let invites: IInvite[];
        invites = await listInvites();
        res.send({data: invites});
    }catch (err) {
        console.error(err);
        res.send(500, {message: "Stuff is busted"});
    }
}
