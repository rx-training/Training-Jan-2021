const mongoose = require('mongoose')

// Doctore schema
const DoctorSchema = new mongoose.Schema({
    doctorId :{
        type : Number,
        required: true,
        min: 0
    },

    doctorName : {
        type : String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
/* 
    doctorGender : {
        type: String,
        require:true,
        enum : ['male','female']
    },

    degree: {
        type : String,
        required: true,
        enum :['MS','MBBS','MD'],
        default: 'MS'
    },

    exprerience : {
        type : Number,
        required: false,
        min: 0
    } */
})
//doctore Model
const Doctor = mongoose.model("Doctors", DoctorSchema)

//


module.exports = Doctor

