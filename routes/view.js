const express = require('express');
const ViewController = require('../controllers/ViewController');
const router = express.Router();

router.get('/', ViewController.view)
router.get('/cart', ViewController.cart)

module.exports = router;