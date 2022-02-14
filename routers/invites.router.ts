import express from 'express';
import * as invites from '../invites/index';

const invitesRouter = express.Router();

invitesRouter.get('/invites', invites.listInvitesController);

invitesRouter.post('/invites', invites.createInviteController);

invitesRouter.put('/invites', invites.updateInviteController);

invitesRouter.delete('/invites/:id', invites.deleteInviteController);

export default invitesRouter;
