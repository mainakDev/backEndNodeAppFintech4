

const getUsers = (req, res, next) => {
    res.json({message: 'GET Route'});
}

const createUser = (req, res, next) => {
    res.json({message: 'POST Route'});
}

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