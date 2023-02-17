//create a server
const express = require('express');

const app = express();

//middleware
app.use('/user-account',(req, res, next) => {
    console.log('Inside another middleware');
    // next();
    res.send('<h1>user account Page</h1>');
});

app.use('/add-products', (req, res, next) => {
    res.send('<h1>Add Products Page</h1>');
});

app.use('/products', (req, res, next) => {
    res.send('<h1>Products Page</h1>');
});

//middleware
app.use('/', (req, res, next) => {
    // console.log('Inside middleware');
    // next();
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);