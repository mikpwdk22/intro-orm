import { Request, Response,  NextFunction } from 'express';
import usersRouter from './routers/users.router';
import "dotenv/config";
import  express from 'express';
import cors from 'cors';

const port: number = 8001;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', usersRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.expose? err.statusCode : 500;
    const message = err.expose? err.message : 'sum ting wen wong'

    res.status(statusCode).json({
        success: false,
        message,
        data: null
    })
})

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
});