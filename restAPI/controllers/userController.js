const User = require('../models/userModels')
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async(req, res, next) => {
    const allUser = await User.find();
    res.json(allUser);
})

const createUser = asyncHandler(async(req, res, next) => {
    if(!req.body.username){
        res.status(400)
        throw new Error('Username not found')
    } else if(!req.body.password){
        res.status(400)
        throw new Error('Password not found')
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json(user)
    // res.json({message: `User ${req.body.username} created`})
})

const updateUser = (req, res, next) => {
    res.json({message: 'PUT Route'});
}

const deleteUser = (req, res, next) => {
    res.json({message: 'DELETE Route'});
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}