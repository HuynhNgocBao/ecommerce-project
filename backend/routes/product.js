const express = require('express');
const router = express.Router();

const {
  getProduct,
  addProduct,
  getProductInfo,
  getMoreProductsWithField,
} = require('../controllers/productController');
const upload = require('../middlewares/uploadCloudinary');

router.post('/addproduct', upload.array('file', 8), addProduct);
router.post('/getproductinfo', getProductInfo);
router.post('/getmoreproductswithfield', getMoreProductsWithField);
router.post('/', getProduct);

module.exports = router;
