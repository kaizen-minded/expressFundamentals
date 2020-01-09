const path = require('path');
const rootDir = require('../utils/path')

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(rootDir , 'views', 'shop.html'))
  const products = adminData.products
  console.log(products.length > 0)
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0})
})

module.exports = router