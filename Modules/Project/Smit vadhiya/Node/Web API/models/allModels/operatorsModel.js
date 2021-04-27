const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const OperatoresSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    DOB: Date,
    companyName: String,
    address: String,
    password: String,
    collaborationDate: {
        type :Date,
        default: Date.now()
    },
    phoneNumber: String,
    city:  {
        type : Number,
        ref : 'Cities'
    }
})

const Operatores = mongoose.model('Operatores',OperatoresSchema)

module.exports = Operatores