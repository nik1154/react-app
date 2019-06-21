const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const User = require('./models/User.js');
const Move = require('./models/Move.js');
const mongoose = require('mongoose');
const mongo_uri = 'mongodb://localhost/react-auth';
const secret = 'mysecretsshhh';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');


mongoose.connect(mongo_uri, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
app.use(cookieParser());
app.listen(port, () => console.log(`Listening on port ${port}`));
