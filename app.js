//
// This is main file containing code implementing the Express server and functionality for the Express echo bot.
//
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

// The rest of the code implements the routes for our Express server.
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/price', function(req, res) {
  console.log('Server called yelp with params "' + JSON.stringify(req.params) + '".');
  res.sendStatus(200);
});

// Display the web page
app.get('/', function(req, res) {
  res.status(200).send("OK!");
});

// Set Express to listen out for HTTP requests
var server = app.listen(process.env.PORT || 3002, function () {
  console.log("Listening on port %s", server.address().port);
});
