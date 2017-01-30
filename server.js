var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("monday")
});

app.get('/api/greeting', function(req, res) {
  res.send("still monday")
});

app.listen(3000, function() {
  console.log("Express up and running on port 3000.");
});
