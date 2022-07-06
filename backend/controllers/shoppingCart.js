const { getShoppingCartService, addShoppingCartService } = require('../services/shoppingCartService');

async function getShoppingCart(req, res) {
  const { user } = req.body;
  if (!user) {
    res.status(400).send("Please add all fields");
    return;
  }
  const shoppingCarts = await getShoppingCartService(user);
  res.status(200).send(shoppingCarts);
}

async function addShoppingCart(req, res) {
  const { user, product, size, color, quantity } = req.body;
  const error = await addShoppingCartService(user, product, size, color, quantity);
  if (!error) res.status(200).send('Add successfully');
  else res.status(400).send(error);
}

module.exports = { getShoppingCart, addShoppingCart };
