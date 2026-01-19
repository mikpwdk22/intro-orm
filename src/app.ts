import express from 'express';

const port: number = 8001;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
});