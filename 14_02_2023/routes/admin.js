const express = require('express');

const router = express.Router();

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    
});

// /admin/products
router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Products Page</h1>');
});

// /admin/payment
router.get('/payment', (req, res, next) => {
    res.send('<h1>Admin Payment page</h1>');
});

module.exports = router;