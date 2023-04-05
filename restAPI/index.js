const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//localhost:3000/api/users
app.use('/api/users',require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})