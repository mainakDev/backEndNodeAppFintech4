const express = require('express');

const router = express.Router();

//middleware
router.use('/', (req, res, next) => {
    // console.log('Inside middleware');
    // next();
    res.send('<h1>Home Page</h1>');
});

module.exports = router;