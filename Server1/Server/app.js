import express from 'express';
import userRouter from './routes/userRoute';
import bodyParser from 'body-parser';

const app = express();

//We can either use the express function or the body-parser function to parse the body of the request.
//app.use(bodyParser.urlencoded());
app.use(express.json());
app.use('/users', userRouter);
app.use('/')


export default app;