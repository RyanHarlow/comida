const express = require('express');
const router = express.Router();
const review = require('../db/review');

//route to add review to an existing stand
router.post('/', (req, res) => {
    review.addReview(req, res);
});

//route to get the average star rating of a place by its id
router.get('/stars/:id', (req, res) => {
    review.getStars(req, res);
});

//route to get reviews for a stand by the stands id
router.get('/:id', (req, res) => {
    review.getReviewsById(req, res);
})



module.exports = router;