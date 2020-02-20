const pool = require('./db');

const getStars = async (request, response) => {
    
    const stars = await pool.query('select avg(stars) from review where stand_id = $1', [request.params.id])
    const starValue = Math.round(stars.rows[0].avg); 
    response.send({rating: starValue})
}

module.exports = {getStars: getStars}