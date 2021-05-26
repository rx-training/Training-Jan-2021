const mongoose = require('mongoose')
const Schema = require('./schema')

mongoose.connect("mongodb://localhost:27017/student").then(()=>{
    console.log('mongodb is connected...');
    });


const student = mongoose.model('student' ,Schema.studentSchema )


module.exports = {student}