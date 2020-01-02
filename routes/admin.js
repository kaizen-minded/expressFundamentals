const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const router = express.Router();
// becareful when using 'use' it will take in any method
// espically since you are using the same path name like below 12.31.2019
router.get('/add-product', (req, res, next) => {
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">SEND</button>')
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/');  
})

module.exports = router