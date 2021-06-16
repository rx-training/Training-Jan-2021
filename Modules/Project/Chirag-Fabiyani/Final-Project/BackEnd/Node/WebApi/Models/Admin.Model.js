const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserAdminSchema = new Schema({
    AdminId:{
        type: Number,
        unique: true
    },
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    EmailId:{
        type: String,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    Password:{
        type: String,
        match: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    }
});

module.exports = mongoose.model('Admins',UserAdminSchema);