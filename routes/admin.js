const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');  
})

exports.routes = router;
exports.products = products

//Things I learned
// becareful when using 'use' it will take in any method
// espically since you are using the same path name like below 12.31.2019