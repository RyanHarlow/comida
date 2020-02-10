const express = require('express')
const router = express.Router()
const places = require('./places/places')

router.get('/', (req, res) => {
    res.send('api route'); 
})

router.use('/places', places);

module.exports = router;