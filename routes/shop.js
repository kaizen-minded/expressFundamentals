const path = require('path');
const rootDir = require('../utils/path')

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('In the homepage')
  res.sendFile(path.join(rootDir , 'views', 'shop.html'))
})

module.exports = router