const pool = require('./db');

const addReview = async (request, response) => {
    try {
        const { reviewText, rating, standId } = request.body;
        const userQueryText = 'select * from person where username = $1'
        const userVals = [request.session.user]
        const user = await pool.query(userQueryText, userVals);
        const userId = user.rows[0].id;
        const duplicate = await pool.query('select * from review where stand_id = $1 and user_id = $2', [standId, userId]);
        if(duplicate.rows.length > 0){
            response.send({err: 'You have already reviewed this location'})
        }else{
        const reviewDate = new Date();
        const reviewQueryText = 'insert into review(stars, text_content, user_id, stand_id, date) values ($1,$2,$3,$4,$5)';
        const reviewVals = [rating, reviewText, userId, standId, reviewDate];
        const review = await pool.query(reviewQueryText, reviewVals);
        response.send({ success: 'review added' })
        }
    } catch (err) {
        response.send({ err })
    }

}

const getStars = async (request, response) => {
    const stars = await pool.query('select avg(stars) from review where stand_id = $1', [request.params.id])
    const starValue = Math.round(stars.rows[0].avg);
    response.send({ rating: starValue })
}

const getReviewsById = async (request, response) => {
    const id = Number(request.params.id);
    const offset = Number((request.query.page - 1) * 10) || 0;
    const queryText = `select
                        r.id r_id,
                        r.stars r_stars,
                        r.text_content r_text,
                        r.date  r_date,
                        r.stand_id r_stand_id,
                        p.username username,
                        p.profile_photo profile_photo,
                        p.id p_id
                        FROM
                            review r
                        INNER JOIN person p ON r.user_id = p.id
                        WHERE r.stand_id = $1
                        ORDER BY r.id desc
                        LIMIT 10
                        OFFSET $2;`;
    const queryVals = [id, offset];

    try {
        const reviews = await pool.query(queryText, queryVals);
        response.send({ success: reviews.rows })
    } catch (err) {CC
        response.send({ err })
    }
}

const getReviewsByUserId = async (request, response) => {
    const id = Number(request.params.id);
    const offset = Number((request.query.page - 1) * 10) || 0;

    const queryText = `select
                        r.id r_id,
                        r.stars r_stars,
                        r.text_content r_text,
                        r.date  r_date,
                        r.stand_id r_stand_id,
                        p.username username,
                        p.profile_photo profile_photo,
                        p.id p_id,
                        s.name s_name
                        FROM review r
                        INNER JOIN person p ON r.user_id = p.id
                        INNER JOIN stand s on r.stand_id = s.id
                        WHERE p.id = $1
                        ORDER BY r.id desc
                        LIMIT 10
                        OFFSET $2;`;
    try {
        const reviews = await pool.query(queryText, [id, offset]);
        response.send({success: reviews.rows})
    } catch (err) {
        response.send({ err })
    }
}

module.exports = {
    getStars: getStars,
    getReviewsById: getReviewsById,
    addReview: addReview,
    getReviewsByUserId: getReviewsByUserId
}