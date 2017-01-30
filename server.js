var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("welcome 2 heck.")
});

app.get('/:user', function(req, res) {
  res.send("welcome 2 heck " + req.params.user + ".")
});

app.get('/api/happy_greeting', function(req, res) {
  res.send("monday! welcome!")
});

app.get('/api/sad_greeting', function(req, res) {
  res.send("still monday. go home.")
});

app.listen(3000, function() {
  console.log("Express up and running on port 3000.");
});
