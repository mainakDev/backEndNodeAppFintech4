const express = require('express')
const {getUsers,createUser,updateUser,deleteUser} = require('../controllers/userController')
const router = express.Router()

router.route('/').get(getUsers).post(createUser)
router.route('/:id').delete(deleteUser).put(updateUser)

module.exports = router