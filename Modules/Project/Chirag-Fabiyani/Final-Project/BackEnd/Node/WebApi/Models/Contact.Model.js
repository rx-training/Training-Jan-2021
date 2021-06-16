const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    AdId:{
        type: Number
    },
    ContactNumber:{
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    AlternateContactNumber:{
        type: String,
        minlength: 10,
        maxlength: 10
    }
});

module.exports = mongoose.model('Contacts',ContactSchema);