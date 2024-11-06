const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const {
  createProduct,
  getAllProducts,
  getAllProductsStatic,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
