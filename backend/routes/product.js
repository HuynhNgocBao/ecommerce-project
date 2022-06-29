const express = require("express");
const router = express.Router();
const {getProduct, addProduct} = require("../controllers/productController");

router.post("/addproduct", addProduct);
router.get("/", getProduct);

module.exports = router;