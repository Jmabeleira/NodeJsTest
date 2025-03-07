import express from 'express';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import shopRouter from './routes/shop.js';
import bodyParser from 'body-parser';



const app = express();

//We can either use the express function or the body-parser function to parse the body of the request.
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
app.use('/admin',productRouter);
app.use(shopRouter);



app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


export default app;