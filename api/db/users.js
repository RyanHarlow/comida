const pool = require('./db');
const validator = require('validator');
const passwordValidator = require('password-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session')


var schema = new passwordValidator();

schema
  .is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits();

const createUser = async (request, response) => {

  let { password, firstName, lastName, username, email, birthdate, acceptsTerms } = request.body;

  email = email.toLowerCase();

  bcrypt.hash(password, saltRounds, async function (err, hash) {

    const text = 'INSERT INTO person(first_name, last_name, username, email, password, birthdate, accepts_terms) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
    const values = [firstName, lastName, username, email, hash, birthdate, acceptsTerms];


    const usernameTaken = await pool.query('SELECT * FROM person WHERE username = $1', [username])
    const emailTaken = await pool.query('SELECT * FROM person WHERE email = $1', [email])

    if (!validator.isEmail(email)) {
      response.json({ err: 'Must Enter Valid Email' })
    } else if (!schema.validate(password)) {
      response.json({ err: 'Password must be over 8 characters and contain uppercase lowercase and numbers' })
    } else if (!acceptsTerms) {
      response.json({ err: 'Must Accept Terms' })
    } else if (usernameTaken.rows[0]) {
      response.json({ err: 'Username Taken' })
    } else if (emailTaken.rows[0]) {
      response.json({ err: 'There is already an account associated with this email' })
    } else {
      pool
        .connect()
        .then(client => {
          return client
            .query(text, values)
            .then(res => {
              client.release()
              request.session.user = username;
              response.json({ success: 'Account Created Successfully' })
            })
            .catch(err => {
              client.release()
              response.send({ err })
            })
        })
    }
  });
}

const getCurrentUser = (request, response) => {
  if(request.session.user){
    response.send({loggedIn: true});
  }else{
    response.send({loggedIn: false})
  }
}

const loginUser = async (request, response) => {
  let { password, email } = request.body;
  email = email.toLowerCase();
  const user = await pool.query('SELECT * FROM person WHERE email = $1', [email])
  if(!user.rows){
    response.send({err: 'Incorrect Email or Password'})
  }else{
    bcrypt.compare(password, user.rows[0].password)
    .then(function(result) {
      if(!result){
        response.send({err: 'Incorrect Email or Password'})
      }else{
        request.session.user = user.rows[0].username;
        response.json({ success: 'Logged In' })
      }  
    });
  }
}

const logoutUser = (request, response) => {
  if (request.session) {
    request.session.destroy(function(err) {
      if(err) {
        response.json({err});
      } else {
        response.send({success: 'User Logged Out'})
      }
    });
  }else{
    response.send({success: 'No User Logged in'})
  }
}
  

module.exports = { 
  createUser: createUser,
  getCurrentUser: getCurrentUser,
  loginUser: loginUser,
  logoutUser: logoutUser
};