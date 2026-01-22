import { Request, Response,  NextFunction } from 'express';
import usersRouter from './routers/users.router';
import "dotenv/config";
import  express from 'express';

const port: number = 8001;

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: err?.message,
        data: null
    })
})

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
});