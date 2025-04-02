import { Router } from "express";
import path from 'path';
import rootDir from '../utils/path.js';

const shopRouter = Router();

console.log(rootDir);


shopRouter.get("/products");
shopRouter.get("/cart");
shopRouter.get("/", (req,res) => {
    res.sendFile(path.join(rootDir,'view','shop.html'));
});


export default shopRouter;