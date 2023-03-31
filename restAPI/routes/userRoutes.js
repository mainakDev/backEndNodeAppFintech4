const express = require('express')
const router = express.Router()

router.get('/api/users', (req, res, next) => {
    res.send('GET Route');
})

router.post('/api/users', (req, res, next) => {
    res.send('POST Route');
})

router.put('/api/users/:id', (req, res, next) => {
    res.send('PUT Route');
})

router.delete('/api/users/:id', (req, res, next) => {
    res.send('DELETE Route');
})

module.exports = router