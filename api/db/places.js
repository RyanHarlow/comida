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
  const username = request.session.user;
  const user = await db.query('SELECT * FROM person WHERE username = $1', [username]);
  const {name, tags, rating, review} = request.body;
  
  const queryText = 'INSERT INTO stand (long, lat, name, tags) VALUES ($1, $2, $3, $4) RETURNING *'
  const standValues = []


}


module.exports = {getAllStands: getAllStands, addStand: addStand};