var express = require('express');
var app = express();
var cust = require('../model/custModel');



var apiController = function (app) {

    var customers=[];
    
    app.get('/home', function (req, res) {
        cust.find({}, function (err, custs) {
            if (err) {
                throw err;
            }
            customers = custs.map((item) => [{
                "id":item._id, 
                "data":item.primaryData
            }]);
            res.send(customers)
        });

    });
}

module.exports = apiController;