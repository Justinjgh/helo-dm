
require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
session = require('express-session');

// app.use(express.static(`${__dirname}/../build`));

const controller = require ('./controller');

const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
   app.set('db', db)})
  .catch(err => console.log(err));

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))
  

app.use(bodyParser.json());


// users endpoints;
app.post('/api/register-user', controller.register_user);
app.post('/api/login-user', controller.login_user);



app.get('/api/user-data', (req, res) => {
  console.log(req.session.user, 'userrrrr')
  if (req.session.user) {
   res.status(200).send(req.session.user)
  } else {
   res.status(401).send('Go log in')
  }
 });


app.listen(SERVER_PORT, () => {
  console.log(`Mayweather makin it rain on port: ${SERVER_PORT}!`);
});
