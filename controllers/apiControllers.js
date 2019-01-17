var express = require('express');
var app = express();
var cust = require('../model/custModel');



var apiController = function (app) {

    // get all customers on home page
    var customers=[];
    app.get('/api/home', function (req, res) {
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

    // get single customer
    app.get('/api/customer/:id', function (req, res) {
        console.log('------------------------------------');
        console.log(req.params);
        console.log('------------------------------------');
        cust.findOne({_id:req.params.id}, function (err, customer) {
            if (err) {
                throw err;
            }
            res.send(customer);
        });
    });

    

}

module.exports = apiController;