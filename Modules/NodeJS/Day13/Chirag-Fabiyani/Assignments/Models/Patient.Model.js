const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    PatientName:{
        type: String,
        required: true
    },
    DiseaseName:{
        type: String
    },
    Status: {
        type: String,
        enum: ["Discharged","Admit","Consulting"]
    },
    Consuming:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drugs'
    }]
});

module.exports = mongoose.model('Patients',PatientSchema);