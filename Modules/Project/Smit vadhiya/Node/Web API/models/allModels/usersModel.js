const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    _id:  Number,
    firstName:  String,
    lastName:  String,
    email:  String,
    gender:  String,
    DOB:  Date,
    password: String,
    phoneNumber: String,
    city: {
        type : Number,
        ref : 'Cities'
    },
    signupDateTime: {
        type : Date,
        default : Date.now()
    }
})  

const Users = mongoose.model('Users',UserSchema)


module.exports = Users