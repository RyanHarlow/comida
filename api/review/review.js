const express = require('express');
const router = express.Router();
const review = require('../db/review');

router.get('/stars/:id', (req, res) => {
    review.getStars(req, res);
});


module.exports = router;