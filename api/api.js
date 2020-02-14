const express = require('express')
const router = express.Router()
const places = require('./places/places')
const users = require('./users/users');

router.get('/', (req, res) => {
    res.send('api route'); 
})

router.use('/places', places);

router.use('/users', users);

module.exports = router;