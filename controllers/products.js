const path = require('path');
const rootDir = path.dirname(require.main.filename);
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
    products.push({title : req.body.title});
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"))
};