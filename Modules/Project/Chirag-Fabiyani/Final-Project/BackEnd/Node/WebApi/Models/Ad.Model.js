const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdSchema = new Schema({
    AdId:{
        type: String,
        unique: true
    },
    Category:{
        type: String
    },
    Title:{
        type: String
    },
    Description:{
        type: String
    },
    Price:{
        type: Number
    },
    Condition:{
        type: String
    },
    ContactNumber:{
        type: String
    },
    AlternateContactNumber:{
        type: String
    },
    City:{
        type: String
    },
    State:{
        type: String
    },
    Image:[{
        type: String
    }],
    ImageManipulation:[{
        type: String
    }],
    Services:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transactions'
    },
    Date:{
        type:String,
        default: new Date()
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Ads',AdSchema);