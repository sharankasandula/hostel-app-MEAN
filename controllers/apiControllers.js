var express = require('express');
var app = express();
var cust = require('../model/custModel');
var bParser = require('body-parser');



var apiController = function (app) {

    // get all customers on home page
    var customers=[];
    app.get('/api/home', function (req, res) {
        cust.find({}, function (err, custs) {
            if (err) throw err;

            if (custs.length !== 0) {
                customers = custs.map((item) => [{
                    "id": item._id,
                    "data": item.primaryData
                }]);
            } else customers = null;
            
            res.send(customers)
        });
    });
    
    // get single customer
    app.get('/api/customer/:id', function (req, res) {
        cust.findOne({_id:req.params.id}, function (err, result) {
            if (err) {
                throw err;
            }
            if (!result) {
                result =null;
            }
            res.send(result);
        });
    });
    
    // delete single customer
    app.delete('/api/customer/:id', function (req, res) {
        var query = { "_id.$oid": req.params.body };
        cust.deleteOne(query, function (err, customer) {
            if (err) {
                throw err;
            }
            if (customer.ok===1) {
                customer = true
            }
            res.send(customer);
        });
    });


    app.use(bParser.json());
    // update single customer
    app.put('/api/customer/:id', function (req, res) {
        cust.updateOne({ _id: req.params.id }, { $set: req.body}, function (err, customer) {
            if (err) {
                throw err;
            }
            res.send(true);
        });
    });

    // post new customer
    app.post('/api/customer', function (req, res) {
        cust.create(req.body, function (err) {
            if (err) {
                throw err;
            }
            res.send(true);
        });
    });
    

    

}

module.exports = apiController;