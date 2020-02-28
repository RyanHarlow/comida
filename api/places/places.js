const express = require('express');
const router = express.Router();
const places = require('../db/places');

router.get('/', (req, res) => {
    places.getAllStands(req, res);
});

router.get('/search', (req, res) => {
    places.searchPlaces(req, res);
})

router.get('/:id', (req, res) => {
    places.getStandById(req, res);
})



router.post('/', (req, res) => {
    places.addStand(req, res);
})

module.exports = router;