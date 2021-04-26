const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Students',{useNewUrlParser: true, useUnifiedTopology: true})
    .then()
    .catch(err => console.log('could not connect to server .....',err))
var db = mongoose.connection
const StudentsSchema = mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Fees:{
        Amount: Number,
        PaymentDate: Date,
        Status: Boolean},
    Result:{
        Hindi: Number,
        Eng: Number,
        Math: Number,
        Total: Number,
        Grade: String}
})

const Students = mongoose.model('Students',StudentsSchema)

module.exports = Students
