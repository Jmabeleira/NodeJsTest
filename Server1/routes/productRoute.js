import { Router } from "express";
import path from 'path';
import rootDir from '../utils/path.js';



//import {} from "../controller/productController.js";


const product = [];

const productRouter = Router();

productRouter.get("/add-product", (req,res) => {
    console.log('Im in add-product');
    res.sendFile(path.join(rootDir,'View','add-product.html'));
});

productRouter.post("/add-product", (req,res) => {
    console.log(req.body.title);    
    res.redirect('/');
});




export default productRouter;