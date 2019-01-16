// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

require('dotenv').load();

const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});