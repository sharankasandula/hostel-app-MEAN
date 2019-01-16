var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var custModel = new Schema({
    primaryData:{
        f_name: String,
        m_name: String,
        l_name: String,
        birth_date: Date,
        married: Boolean,
        spouse: {
            name: String,
            contact: Number
        },
        contact_numbers: [
            { phone: Number, }
        ],
        purpose_of_stay: String,
        native: String,
    },
    foodPreferences:{
        veg: Boolean,
        non_veg: Boolean,
        eggetarian: Boolean,
        tea: Boolean,
        coffee: Boolean,
        milk: Boolean,
        bournvita: Boolean,
        horlicks: Boolean,
        s_indian: Boolean,
        n_indian: Boolean,        
    },
    medical:{
        has_medical_history:Boolean,
        blood_group:String,
        conditions:[
            {
                description:String
            }
        ],
        allergies:[
            {
                description:String
            }
        ],
        doctors:[
            {
                family_doctors: [
                    {
                        name:String,
                        contact:Number,
                    }
                ],
                local_doctors: [
                    {
                        name:String,
                        contact:Number,
                    }
                ]
            }
        ]
    },
    visitors:[
        {
            name:String,
            relation:String,
            contact:Number
        }
    ],
    local_contacts:[
        {
            name:String,
            relation:String,
            contact:Number
        }
    ],
    guadians:[
        {
            name:String,
            relation:String,
            contact:Number
        }
    ]
});

var cust = mongoose.model('customerModel', custModel);

module.exports = cust;

