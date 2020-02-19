const db = require('./db');


const getAllStands = (request, response) => {

db
.connect()
  .then(client => {
    return client
      .query('SELECT * FROM stand')
      .then(res => {
        client.release()
        response.json(res.rows)
      })
      .catch(err => {
        client.release()
        console.log(err.stack)
      })
  })
}

const addStand = async (request, response) => {
  try{
  const username = request.session.user;
  const user = await db.query('SELECT * FROM person WHERE username = $1', [username]);
  const {name, tags, rating, reviewText, lat, long} = request.body;
  const reviewDate = Date.now();
  
  const standQueryText = 'INSERT INTO stand (long, lat, name, tags) VALUES ($1, $2, $3, $4) RETURNING *'
  const standValues = [long, lat, name, [tags]];
  
 const stand = await db.query(standQueryText, standValues);
 
 const reviewQueryText = 'INSERT INTO REVIEW (stars, text_content, user_id, stand_id, date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
 const reviewValues = [rating, reviewText, user.rows[0].id, stand.rows[0].id, reviewDate]; 
 const review = await db.query(reviewQueryText, reviewValues)
  
  response.send({success: 'Location Added'})

}catch(err){
    response.send({err})
  }



}


module.exports = {getAllStands: getAllStands, addStand: addStand};