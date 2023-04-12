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

const updateUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('User doesnt exist')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedUser)
})

const deleteUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('User doesnt exist')
    }
    await user.deleteOne()
    res.json({message: `DELETED user ${user.username}`});
})

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}