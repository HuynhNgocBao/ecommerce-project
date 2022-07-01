const Product = require("../models/Product");

async function getProductService(
  genderFilter,
  typeFilter,
  categoryFilter,
  sizeFilter,
  colorFilter,
  brandFilter,
  priceFilter,
  availableFilter
) {
  const options = {};
  if (genderFilter) {
    options.gender = genderFilter;
  }
  if (typeFilter) {
    options.type = typeFilter;
  }
  if (categoryFilter) {
    options.categories = { $in: categoryFilter };
  }
  if (sizeFilter) {
    options.size = { $in: JSON.parse(sizeFilter) };
  }
  if (colorFilter) {
    options.colors = { $in: JSON.parse(colorFilter) };
  }
  if (brandFilter) {
    options.brand = { $in: brandFilter };
  }
  if (priceFilter) {
    options.price = {
      $lte: Number(JSON.parse(priceFilter[0])),
      $gte: Number(JSON.parse(priceFilter[1])),
    };
  }
  const products = await Product.find(options);
  return products;
}

async function checkBeforeAddProductService(
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
) {
  const isProductExists = await Product.find({ name });
  if (!isProductExists) {
    return true;
  }
  return false;
}

module.exports = { getProductService, checkBeforeAddProductService };
