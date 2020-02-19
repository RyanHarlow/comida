const express = require('express');
const router = express.Router();
const places = require('../db/places');

router.get('/', (req, res) => {
    places.getAllStands(req, res);
});

router.post('/', (req, res) => {
    places.addStand(req, res);
})

module.exports = router;