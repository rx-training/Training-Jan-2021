const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdSchema = new Schema({
    AdId:{
        type: Number,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contacts'
    },
    Location:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locations'
    },
    Image:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Images'
    }],
    Services:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transactions'
    }
});

module.exports = mongoose.model('Ads',AdSchema);