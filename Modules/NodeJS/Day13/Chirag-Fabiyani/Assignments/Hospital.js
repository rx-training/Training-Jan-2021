const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    DrugName: {
        type: String,
        required: true
    },
    Prescriptions:{
        type: String,
        required: true
    }
});

const AssistantSchema = new Schema({
    AssistantName: {
        type: String,
        required: true
    },
    PostOfAssistant: {
        type: String,
        enum: ["Senior", "Junior", "Trainee"]
    }
});

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

const DepartmentSchema = new Schema({
    DepartmentName:{
        type: String,
        required: true
    },
    Block:{
        type: String,
        enum: ["A","B","C","D"]
    }
});



const Patients = mongoose.model('Patients',PatientSchema);
const Doctors = mongoose.model('Doctors',DoctorSchema);
const Departments = mongoose.model('Departments',DepartmentSchema);
const Assistants = mongoose.model('Assistants',AssistantSchema);
const Drugs = mongoose.model('Drugs',DrugSchema);

module.exports = {Patients,Doctors,Departments,Assistants,Drugs};