const {
  getProductService,
  checkBeforeAddProductService,
} = require("../services/productService");
const Product = require("../models/Product");

async function getProduct(req, res) {
  const {
    genderFilter,
    typeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter,
  } = req.body;

  const products = await getProductService(
    genderFilter,
    typeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter
  );
  res.status(200).send(products);
}

async function checkBeforeAddProduct(req, res) {
  const {
    gender,
    type,
    name,
    categories,
    brand,
    price,
    size,
    colors,
    quantity,
    description,
  } = req.body;
  if (
    !gender ||
    !type ||
    !name ||
    !categories ||
    !brand ||
    !price ||
    !size ||
    !colors ||
    !quantity ||
    !description
  ) {
    res.status(400).send("Please add all fields");
    return;
  }
  const isProductExists = await checkBeforeAddProductService(
    gender,
    type,
    name,
    categories,
    brand,
    price,
    size,
    colors,
    quantity,
    description
  );
  if (isProductExists) {
    res.status(400).send("Product exists");
  } else res.status(200).send("");
}

async function addProduct(req, res) {
  const {
    gender,
    type,
    name,
    brand,
    price,
    quantity,
    description,
  } = req.body;
  categories = req.body.categories.split(",");
  size = req.body.size.split(",");
  colors = req.body.colors.split(",");
  const photos = req.files.map((file,index)=>{
    return file.filename;
  })
  await Product.create({
    photos,
    gender,
    type,
    name,
    categories,
    brand,
    price,
    size,
    colors,
    quantity,
    description,
  })
  res.status(200).send("Upload successfully");
}

module.exports = { getProduct, checkBeforeAddProduct, addProduct };
