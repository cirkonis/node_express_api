import {Request, Response} from 'express'
import {updateInvite} from "./updateInvite";

export async function updateInviteController(req: Request, res: Response) {
    try {
        const success: {message: string} = await updateInvite(req.body);
        res.send(success);
    } catch (err){
        console.error(err)
        res.send(500, {message: 'stuff is busted'});
    }
}
