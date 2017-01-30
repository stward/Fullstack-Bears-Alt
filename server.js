var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fullstack-bears');

app.get('/api/bears', function(req, res) {
  res.json({message: "Bears route"});
});

app.listen(3000, function() {
  console.log("Express up and running on port 3000.");
});
