import { Router } from "express";
import { UsersController } from './users.controller';

const usersRouter = Router();

usersRouter.get('/', UsersController.get);
usersRouter.post('/', UsersController.create);

export default usersRouter;