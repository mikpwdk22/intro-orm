import { Router } from "express";
import { UsersController } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('/', UsersController.get);
usersRouter.post('/', UsersController.create);

export default usersRouter;