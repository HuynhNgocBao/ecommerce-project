const {
  getProductService,
  addProductService,
} = require("../services/productService");

async function getProduct(req, res) {
  const {
    genderTypeFilter,
    clothesTypeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter,
  } = req.body;

  const products = await getProductService(
    genderTypeFilter,
    clothesTypeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter
  );
  res.status(200).send(products);
}

async function addProduct(req, res) {
  const {
    genderType,
    clothesType,
    photos,
    name,
    categories,
    brand,
    price,
    size,
    color,
    quantity,
    description,
  } = req.body;
  const product = await addProductService(
    genderType,
    clothesType,
    photos,
    name,
    categories,
    brand,
    price,
    size,
    color,
    quantity,
    description
  );
  if (product){
    res.status(200).send(product);
  }
  else res.status(400).send("Product exists");
}

module.exports = { getProduct, addProduct };
