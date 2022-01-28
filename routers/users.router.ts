import express from 'express';
import * as users from '../users/index'

const usersRouter = express.Router();

usersRouter.get('/users', users.listUsersController);

export default usersRouter;