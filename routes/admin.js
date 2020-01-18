const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')
const router = express.Router();

router.get('/add-product', adminController.getAddProduct)

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct)

module.exports = router
//Things I learned
// becareful when using 'use' it will take in any method
// espically since you are using the same path name like below 12.31.2019