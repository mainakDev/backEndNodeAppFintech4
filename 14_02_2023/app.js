const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const filePath = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

//404 middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(filePath,'views','404.html'));
});


app.listen(3000);