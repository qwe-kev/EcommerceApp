const express = require('express');
const path = require('path');
const { route } = require('./shop');
const router = express.Router();
//const products = [];
const rootDir = path.dirname(require.main.filename);
const adminController = require('../controllers/admin')
// router.get("/add-product", (req, res, next) => {
//     res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });

// router.post("/add-product", (req, res, next) => {
//     products.push({title : req.body.title});
//     res.redirect("/");
// });
router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);
  
  // /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
  
exports.routes = router;
  

