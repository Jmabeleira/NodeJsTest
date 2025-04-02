const Product = require("../Models/Product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const values = {
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      price: req.body.price,
    };
    const product = new Product(values.title,values.imageUrl,values.description,values.price);
    console.log(product);
    product.save();
    res.redirect("/");
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render("admin/products-list", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products-list",
      });
    });
  };