const path = require("path");
const fs = require("fs");

const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]); // Return an empty array if there's an error
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;

  }

  save() {
    this.id = Math.random().toString();
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    ); // Define the path here

    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};