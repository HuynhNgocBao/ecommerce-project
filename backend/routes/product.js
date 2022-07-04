const express = require("express");
const router = express.Router();

const { getProduct, checkBeforeAddProduct, addProduct, getProductInfo, getMoreProductsWithField } = require("../controllers/productController");
const upload = require("../middlewares/uploadCloudinary");

router.post("/checkbeforeaddproduct", checkBeforeAddProduct);
router.post("/addproduct",upload.array("file",4), addProduct);
router.post("/getproductinfo", getProductInfo);
router.post("/getmoreproductswithfield", getMoreProductsWithField);
router.post("/", getProduct);

module.exports = router;
