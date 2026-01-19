import express from 'express';
import usersRouter from './routers/users.router';
import "dotenv/config";

const port: number = 8001;

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
});