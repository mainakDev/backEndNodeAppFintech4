const express = require('express');
const path = require('path');
const filePath = require('../util/path');

const router = express.Router();

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(filePath,'views','add-product.html')); 
});

// /admin/products
router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(filePath,'views','shop.html'));
});

module.exports = router;