const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    DoctorName:{
        type:String,
        required: true,
        uppercase: true
    },
    Experience: {
        type: String
    },
    Speciality:{
        type: String
    },
    Patients:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients'
    }],
    ServingIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departments'
    },
    Assistants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assistants'
    }]
});

module.exports = mongoose.model('Doctors',DoctorSchema);