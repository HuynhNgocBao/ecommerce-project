const Product = require('../models/Product');
const User = require('../models/User');
const ShoppingCart = require('../models/ShoppingCart');

async function addShoppingCartService(user, product, size, color, quantity) {
  if (!user || !product || !size || !color || !quantity) {
    return 'Please add all fields';
  }
  const userExists = await User.findById(user);
  if (!userExists) {
    return 'User not found';
  }
  const productExists = await Product.findById(product);
  if (!productExists) {
    return 'Product not found';
  }
  await ShoppingCart.create({
    user,
    product,
    size,
    color,
    quantity,
  });
  return null;
}

async function getShoppingCartService(user) {
  const shoppingCarts = await ShoppingCart.find({ user }).populate({
    path: 'product',
    select: 'name photos price quantity',
  });
  return shoppingCarts;
}

module.exports = { addShoppingCartService, getShoppingCartService };
