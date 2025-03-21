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
  try {
    const username = request.session.user;
    const user = await db.query('SELECT * FROM person WHERE username = $1', [username]);
    const { name, tagList, rating, reviewText, lat, long } = request.body;
    const reviewDate = new Date();

    if (!name || !tagList || !rating || !reviewText || !lat || !long) {
      response.send({ err: 'Must Fill Out All Fields' });
    }else{

    const standQueryText = 'INSERT INTO stand (long, lat, name, tags) VALUES ($1, $2, $3, $4) RETURNING *'
    const standValues = [long, lat, name, tagList];

    const stand = await db.query(standQueryText, standValues);

    const reviewQueryText = 'INSERT INTO REVIEW (stars, text_content, user_id, stand_id, date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const reviewValues = [rating, reviewText, user.rows[0].id, stand.rows[0].id, reviewDate];
    const review = await db.query(reviewQueryText, reviewValues)

    response.send({ success: 'Location Added' })
    }
  } catch (err) {
    console.log(err)
    response.send({ err })
  }
}

const getStandById = async (request, response) => {
  try{
  const id = request.params.id;
  const queryText = 'SELECT * FROM stand WHERE id = $1'
    const value = [id];

    const stand = await db.query(queryText, value);
    response.json({success: stand.rows[0]})
  }catch(err) {
    response.json({err: err})
  }
}

const searchPlaces = async (request, response) => {
try{
  const queryItems = request.query.search.split(' ');
  for(let i = 0; i < queryItems.length; i++){
    queryItems[i] = `%${queryItems[i]}%`
  }
  let tagText = '';
  let nameText = '';
  for(let i = 1; i < queryItems.length; i++){
    tagText = tagText + ` or elem like $${i+1} `
    nameText = nameText + ` or name ilike $${i + 1} `
  }
  const queryText = `SELECT *
  FROM   stand
  WHERE  EXISTS (
      SELECT  
      FROM   unnest(tags) elem
      WHERE  elem ILIKE $1 ${tagText}
    ) or name ilike $1 ${nameText};`

    const results = await db.query(queryText, queryItems);
    for(var i = 0; i < results.rows.length; i++){
      let rating = await db.query('select avg(stars) from review where stand_id = $1', [results.rows[i].id])
      results.rows[i].rating = rating.rows[0].avg;
    }
  response.json({success: results.rows})
  }catch(err){
    response.json({err})
  }
}


module.exports = {
  getAllStands: getAllStands,
  addStand: addStand,
  getStandById: getStandById,
  searchPlaces: searchPlaces
};