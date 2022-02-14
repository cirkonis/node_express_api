import { Request, Response } from 'express'
import {deleteInvite} from "./deleteInvite";

export async function deleteInviteController(req: Request, res: Response) {
    try {
        const success: {message: string} = await deleteInvite(req.params.id);
        res.send(success);
    } catch (err){
        console.error(err)
        res.send(500, {message: 'stuff is busted'});
    }
}
