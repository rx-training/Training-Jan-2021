const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorName : String ,
    doctorDesignation : String ,
});


const patientSchema = new mongoose.Schema({
    patientName : {
        type : String ,
        required : true
    },
    patientAge : Number ,
    patientAddress : String,
    patientContactNo : {
        type :Number ,
        validate :{
            validator : function(v){
                return /\d{1}/.test(v);
            }
        }
    } ,
    illness :{
        type : String,
        required :true
    },
    medicines :[String], 
    assignedDoctor : [doctorSchema],
    assignedAssistants : [assistantsSchema],
    admitTime : {
        type:Date ,
        default : new Date
    }

});

const assistantsSchema = new mongoose.Schema({
    assistantsName : String , 
    assistantsDuty : String ,
    Shift : {
        type : String ,
        enum : ['Night' , 'Day']
    },
    departmentName : String ,
})

const departmentSchema = new mongoose.Schema({

    departmentName : String,
    departmentNumber : String,
    healthcareAssistants : [assistantsSchema],
    doctors : [doctorSchema]
})


module.exports = {doctorSchema , patientSchema};