const Product = require("../models/Product");

async function getProductService(
  page = 1,
  genderFilter,
  typeFilter,
  categoryFilter,
  sizeFilter,
  colorFilter,
  brandFilter,
  priceFilter,
  availableFilter,
  sortFilter
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
  if (sizeFilter && sizeFilter.length > 0) {
    options.size = { $all: sizeFilter };
  }
  if (colorFilter && colorFilter.length > 0) {
    options.colors = { $all: colorFilter };
  }
  if (brandFilter && brandFilter.length > 0) {
    options.brand = { $in: brandFilter };
  }
  if (priceFilter) {
    options.price = {
      $gte: priceFilter.left,
      $lte: priceFilter.right,
    };
  }
  const perPage = 20;
  let products;
  let total;

  if (!sortFilter.field) {
    products = await Product.find(options)
      .skip(perPage * page - perPage)
      .limit(perPage);
    total = await Product.find(options).countDocuments();
  } else {
    products = await Product.find(options)
      .skip(perPage * page - perPage)
      .limit(perPage)
      .sort({
        [sortFilter.field]: sortFilter.isInc,
      });
    total = await Product.find(options)
      .sort({
        [sortFilter.field]: sortFilter.isInc,
      })
      .countDocuments();
  }
  return [products, perPage, total];
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
  const isProductExists = await Product.findOne({ name });
  if (!isProductExists) {
    return true;
  }
  return false;
}

async function addProductService(
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
  description
) {
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
  });
  return true;
}

module.exports = {
  getProductService,
  checkBeforeAddProductService,
  addProductService,
};
