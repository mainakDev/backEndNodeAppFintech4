const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // console.log(req.body);
  // console.log(req.body.title);
  product.push(req.body.title);
  res.redirect('/');
});

exports.routes = router;
exports.product = product;


exportedObject = {
  routes: router,
  product: product
}

person = {
  name: 'XYZ',
  phone: '123'

}

person.phone