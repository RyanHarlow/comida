const express = require('express')
const router = express.Router()
const places = require('./places/places')
const users = require('./users/users');
const review = require('./review/review');

router.get('/', (req, res) => {
    res.send('api route'); 
})

router.use('/places', places);

router.use('/users', users);

router.use('/review', review);

module.exports = router;