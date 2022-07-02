const {
  getProductService,
  checkBeforeAddProductService,
  addProductService,
} = require("../services/productService");

async function getProduct(req, res) {
  const {
    page,
    genderFilter,
    typeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter,
    sortFilter
  } = req.body;

  const [products, perPage, total] = await getProductService(
    page,
    genderFilter,
    typeFilter,
    categoryFilter,
    sizeFilter,
    colorFilter,
    brandFilter,
    priceFilter,
    availableFilter,
    sortFilter
  );
  res.status(200).send({products, perPage,total});
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
  const isValid = await checkBeforeAddProductService(
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
  if (!isValid) {
    res.status(400).send("Product exists");
  } else res.status(200).send("");
}

async function addProduct(req, res) {
  const { gender, type, name, brand, price, quantity, description } = req.body;
  categories = req.body.categories.split(",");
  size = req.body.size.split(",");
  colors = req.body.colors.split(",");
  const photos = req.files.map((file, index) => {
    return file.filename;
  });
  const isSuccess = addProductService(
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
  );
  if (isSuccess) res.status(200).send("Upload successfully");
}

module.exports = { getProduct, checkBeforeAddProduct, addProduct };
