const express = require('express');
const route = require('.');
const router = express.Router();
const {register, login}= require('../controllers/authController');

router.post('/register',register);
router.post('/login', login);

module.exports = router;