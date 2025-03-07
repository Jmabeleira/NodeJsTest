import { Router } from "express";

//import {} from "../controller/productController.js";


const productRouter = Router();

productRouter.get("/add-product", (req,res) => {
    console.log('Im in add-product');
    res.send('<form action= "/products" method="POST"> <input type="text" name="title"> <button type="submit">Add Product</button> </form>');
});

productRouter.post("/products", (req,res) => {
    console.log(req.body.title);    
    res.redirect('/');
});




export default productRouter;