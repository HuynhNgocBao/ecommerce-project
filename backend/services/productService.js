const Product = require("../models/Product");

async function getProductService(
  genderTypeFilter,
  clothesTypeFilter,
  categoryFilter,
  sizeFilter,
  colorFilter,
  brandFilter,
  priceFilter,
  availableFilter
) {
  const options = {};
  if (genderTypeFilter) {
    options.genderType = genderTypeFilter;
  }
  if (clothesTypeFilter) {
    options.clothesType = clothesTypeFilter;
  }
  if (categoryFilter) {
    options.categories = { $in: categoryFilter };
  }
  if (sizeFilter) {
    options.size = { $in: JSON.parse(sizeFilter) };
  }
  if (colorFilter) {
    options.color = { $in: JSON.parse(colorFilter) };
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

async function addProductService(
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
) {
  const isProductExists = await Product.find({ name });
  if (!isProductExists) {
    const product = await Product.create({
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
    });
    return product;
  }
  return null;
}

module.exports = { getProductService, addProductService };
