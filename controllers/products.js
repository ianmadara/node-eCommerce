const Product = require("../models/product");

exports.getAddProductPage = (req, res, next) => {
  res.render("addproduct", {
    pageTitle: "Add Product",
    path: "/admin/product",
  });
};

exports.getSaveProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.getAllProducts();
  res.render("index", {
    prods: products,
    pageTitle: "Home Page",
    path: "/",
  });
};
