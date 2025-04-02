import express from 'express';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import shopRouter from './routes/shop.js';
import bodyParser from 'body-parser';
import path from 'path';
import rootDir from './utils/path.js';


const app = express();
const __dirname = path.resolve();


//We can either use the express function or the body-parser function to parse the body of the request.
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.json());
app.use('/admin',productRouter);
app.use(shopRouter);



app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'view','404.html'));
});


export default app;