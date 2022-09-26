
import express, { NextFunction, Request, Response } from 'express';
import statusRouter from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(userRoute);
app.use(statusRouter);

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});