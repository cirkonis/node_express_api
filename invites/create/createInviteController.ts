import {Request, Response} from 'express'
import {createInvite} from "./createInvite";
import {IInvite} from "../../interfaces/IInvite";

export async function createInviteController(req: Request, res: Response) {
    try {
        const invite: IInvite = await createInvite(req.body);
        res.send({data: invite});
    } catch(err){
        console.error(err);
        res.send(500, {message: 'stuff is busted'});
    }
}
