const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserId:{
        type: Number,
        unique: true
    },
    ContactNumber:{
        type: String,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    EmailId:{
        type: String,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    Password:{
        type: String,
        match: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    },
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    Bio:{
        type: String
    },
    Ads:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ads'
    }]
});

module.exports = mongoose.model('Users',UserSchema);