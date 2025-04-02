const fs = require('fs');
const path = require('path');
const Product = require('./Product');

const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "cart.json"
  );


module.exports = class Cart {
    static addProduct(id,productPrice){
      fs.readFile(p,(err,fileContent) => {
        let cart = {products:[], totalPrice: 0}
        if(!err){
            try {
                cart = JSON.parse(fileContent);
                if (!Array.isArray(cart.products)) {
                    cart.products = [];
                }
            } catch (parseErr) {
                console.log("Error parsing JSON, initializing empty cart.");
            }
        }
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        if(existingProduct){
            updatedProduct={...existingProduct};
            updatedProduct.qty = updatedProduct.qty+1;
            cart.products=[...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        }else{
            updatedProduct={id:id,qty:1};
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice+ +productPrice;
        fs.writeFile(p,JSON.stringify(cart),(err) =>{
            console.log(err);
        } )
      })  
    }
}