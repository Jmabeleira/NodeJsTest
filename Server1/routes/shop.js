import { Router } from "express";

const shopRouter = Router();


shopRouter.get("/products");
shopRouter.get("/cart");
shopRouter.get("/", (req,res) => {
    res.send('<html><h1>Welcome</h1></html>');
});


export default shopRouter;