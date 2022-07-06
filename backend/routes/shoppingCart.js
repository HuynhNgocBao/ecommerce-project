const express = require('express');
const router = express.Router();

const { addShoppingCart, getShoppingCart } = require('../controllers/shoppingCart');

router.post('/addshoppingcart', addShoppingCart);
router.post('/', getShoppingCart);

module.exports = router;
