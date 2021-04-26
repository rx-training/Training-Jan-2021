const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    Name : String ,
    Id : Number,
    Designation : String ,
    Patients : [{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'patient'
    }]
});

const medicineSchema = new mongoose.Schema({
  
    medicineName : String,
    prescription  :[{
        type :String,
        enum : ["Morning" , "Evening" , "Afternoon"]
    }]
})



const assistantsSchema = new mongoose.Schema({
    assistantsName : String , 
    assistantsDuty : String ,
    shift : {
        type : String ,
        enum : ['Night' , 'Day']
    },
    departmentName : String ,
});


const departmentSchema = new mongoose.Schema({

    departmentName : String,
    departmentNumber : String,
    healthcareAssistants :{
        type : mongoose.Types.ObjectId,
        ref : 'assistant'
    },
    doctors :{
        type : mongoose.Types.ObjectId,
        ref : 'doctor'
    }
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
    medicines :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'medicine'
        }], 
    assignedDoctor : {
        type : mongoose.Types.ObjectId,
        ref : 'doctor'
    },
    assignedAssistants :[ {
        type : mongoose.Types.ObjectId,
        ref : 'assistant'
    }],
    admitTime : {
        type:Date ,
        default : new Date
    }

});

module.exports = {doctorSchema  , assistantsSchema , departmentSchema , patientSchema , medicineSchema};