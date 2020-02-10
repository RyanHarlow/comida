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

module.exports = {getAllStands: getAllStands};