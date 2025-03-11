import { Router } from "express";
import path from 'path';


//import {} from "../controller/productController.js";


const productRouter = Router();
const __dirname = path.resolve();
const rootDir = require('../utils/path.js');

productRouter.get("/add-product", (req,res) => {
    console.log('Im in add-product');
    res.sendFile(path.join(__dirname,'view','add-product.html'));
});

productRouter.post("/add-product", (req,res) => {
    console.log(req.body.title);    
    res.redirect('/');
});




export default productRouter;