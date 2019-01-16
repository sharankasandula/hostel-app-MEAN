var express = require('express');
var app = express();
var mongoose=require('mongoose');

var config = require('./config/index');
var setupController = require('./controllers/setupController');


var port = process.env.PORT || 3000;

app.get('/', function (req,res) {
    res.send('Working')
});
mongoose.connect(config.getDatabaseConnectionString(), { useNewUrlParser: true })

setupController(app);

app.listen(port);
