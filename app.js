var express = require('express');
var app = express();
var mongoose=require('mongoose');

var config = require('./config/index');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiControllers');


var port = process.env.PORT || 3000;

mongoose.connect(config.getDatabaseConnectionString(), { useNewUrlParser: true });

app.get('/', function (req,res) {
    res.send('Working')
});



apiController(app);
setupController(app);

app.listen(port);
