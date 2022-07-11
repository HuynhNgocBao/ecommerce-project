const express = require('express');
const router = express.Router();

const {
  getProduct,
  addProduct,
  getProductInfo,
  getMoreProductsWithField,
  getProductAdmin,
} = require('../controllers/productController');
const upload = require('../middlewares/uploadCloudinary');

router.post('/addproduct', upload.array('file', 8), addProduct);
router.post('/getproductinfo', getProductInfo);
router.post('/getmoreproductswithfield', getMoreProductsWithField);
router.post('/getproductadmin', getProductAdmin);
router.post('/', getProduct);

module.exports = router;
