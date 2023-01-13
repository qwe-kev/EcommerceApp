const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = path.dirname(require.main.filename);
const adminData = require('./admin');
const shopController = require('../controllers/shop');

// router.get('/',(req, res, next) => {
//     console.log(adminData.products);
//     res.sendFile(path.join(rootDir, "views", "shop.html"))
// });
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.get('/', shopController.getIndex);

module.exports = router;