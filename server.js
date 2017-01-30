var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear = require('./models/bear');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullstack-bears');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/bears', function(req, res) {
  Bear.find(function(err, data) {
    if(err) {
      console.log(err, "Error finding bears");
    } else {
      res.json(data);
    }
  });
});

app.post('/api/bears', function(req, res) {

  var bear = new Bear({
    age: req.body.age,
    species: req.body.species,
    name: req.body.name,
    weight: req.body.weight,
    location: req.body.location,
    attitude: req.body.attitude
  });

  bear.save(function(err, bearData) {
    if(err) {
      console.log(err, "error with your bear");
    } else {
      res.json(bearData);
    }
  });

});

app.get('/api/bears/:bear_id', function(req, res) {
  Bear.find(function(err, data) {
    Bear.findById(req.params.bear_id, function(err, bearData) {
      if(err) {
        console.log(err, "Error finding this bear");
      } else {
        res.json(bearData);
      }
    });
  });
});

app.listen(3000, function() {
  console.log("Express up and running on port 3000.");
});
