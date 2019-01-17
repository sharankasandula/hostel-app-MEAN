// this controller handles setting up the databse by stubbing dummy data

var cust = require('../model/custModel');
var app = require('express');

var stub = function (app) {
    app.get('/api/setup', function (req, res) {
        var dummyCustomer = {
            "primaryData": {
                "f_name": "Mark",
                "m_name": "Richard",
                "l_name": "Watney",
                "birth_date": "2019-01-17T12:46:37.152Z",
                "married": true,
                "spouse": {
                    "name": "Jessica Watney",
                    "contact": 234534123421
                },
                "contact_numbers": [
                    { "phone": 12345678901234 }
                ],
                "purpose_of_stay": "Explore",
                "native": "Chicago, USA"
            },
            "foodPreferences": {
                "pure_veg": true,
                "non_veg": true,
                "eggetarian": true,
                "tea": true,
                "coffee": true,
                "milk": true,
                "bournvita": true,
                "horlicks": true,
                "s_indian": true,
                "n_indian": true
            },
            "medical": {
                "has_medical_history": false,
                "blood_group": "B+",
                "conditions": [
                    {
                        "description": null
                    }
                ],
                "allergies": [
                    {
                        "description": "None"
                    }
                ],
                "doctors": [
                    {
                        "family_doctors": [
                            {
                                "name": "Venkat Kapoor",
                                "contact": 12345678901234
                            }
                        ],
                        "local_doctors": [
                            {
                                "name": "Pa Watney",
                                "contact": 1234567812334
                            }
                        ]
                    }
                ]
            },
            "visitors": [
                {
                    "name": "Ares 4",
                    "relation": "Saviour",
                    "contact": 123456788463465
                }
            ],
            "local_contacts": [
                {
                    "name": "Melissa Lewis",
                    "relation": "Crew mate",
                    "contact": 123242123123
                },
                {
                    "name": "Rick Martinez",
                    "relation": "Crew mate",
                    "contact": 123242123123
                },
                {
                    "name": "Chris Beck",
                    "relation": "Crew mate",
                    "contact": 123242123123
                },
                {
                    "name": "Alex Vogel",
                    "relation": "Crew mate",
                    "contact": 123242123123
                },
                {
                    "name": "Beth Johanssen",
                    "relation": "Crew mate",
                    "contact": 123242123123
                }
            ],
            "guardians": [
                {
                    "name": "Hab",
                    "relation": "Home",
                    "contact": 12214313123
                },
                {
                    "name": "Mars Rover 1",
                    "relation": "Vehicle",
                    "contact": 12214313123
                },
                {
                    "name": "Mars Rover 2",
                    "relation": "Vehicle",
                    "contact": 12214313123
                }
            ]
        }

        cust.create(dummyCustomer, function (err) {
            if (err) {
                throw err;
            }
        })
       
        res.send(dummyCustomer);
    });


    // aelete all customers
    app.delete('/api/cleanSweep', function (req, res) {
        cust.deleteMany({}, function (err, customer) {
            if (err) {
                throw err;
            }
            res.send(true);
        });
    });
}

module.exports = stub;
