import { Router } from "express";
import path from 'path';

const shopRouter = Router();
const __dirname = path.resolve();


shopRouter.get("/products");
shopRouter.get("/cart");
shopRouter.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,'view','shop.html'));
});


export default shopRouter;