const mongoose = require('mongoose')

// Patient schema
const PatientSchema = new mongoose.Schema({
    patientId :{
        type : Number,
        required: true,
        min: 0
    },

    patientName : {
        type : String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

     patientGender : {
        type: String,
        require:true,
        enum : ['male','female']
    },

    patientBloodType : {
        type : String,
        required: true,
    },

    patientDrugDetail: {
        morning : [{
            type :  mongoose.Schema.Types.ObjectId,
            ref: 'Medicines'
        }],
        afternoon : [{
            type :  mongoose.Schema.Types.ObjectId,
            ref: 'Medicines'
        }],
        night : [{
            type :  mongoose.Schema.Types.ObjectId,
            ref: 'Medicines'
        }]
    },
 
    assignDoctor : {
        type : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctors'
        }]
    }
})


//patient Model
const Patient = mongoose.model("Patients", PatientSchema)


module.exports = Patient

