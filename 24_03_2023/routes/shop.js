const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminRoutes = require('./admin');

const products = adminRoutes.data;

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render(
    'shop', 
    { pageTitle: 'Shop page',
      products: products
    });
  // console.log(adminRoutes.product);
});

module.exports = router;