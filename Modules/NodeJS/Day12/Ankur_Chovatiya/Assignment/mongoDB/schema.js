const mongoose = require('mongoose');

const Employee = new mongoose.Schema({
    Address:{
        line1: String,
        line2: String,
        line3: String
    },
    Assignments :{
        type:Array, 
        required:true
    },
    CitizenshipId : Number,
    CitizenshipLegislationCode : String,
    CitizenshipStatus : String,
    CitizenshipToDate : Date,
    City : String,
    CorrespondenceLanguage : String,
    Country : String,
    CreationDate : Date,
    DateOfBirth : Date,
    directReports : Array,
    DisplayName : String,
    DriversLicenseExpirationDate : Date,
    DriversLicenseId : Number,
    DriversLicenseIssuingCountry : String,
    EffectiveStartDate : Date,
    Ethnicity : String,
    FirstName : String,
    Gender : String,
    HireDate : Date,
    HomeFaxAreaCode : String,
    HomeFaxCountryCode : String,
    HomeFaxExtension : String,
    HomeFaxLegislationCode : String,
    HomeFaxNumber : String,
    HomePhoneAreaCode : String,
    HomePhoneCountryCode : String,
    HomePhoneExtension : String,
    HomePhoneLegislationCode : String,
    HomePhoneNumber : String,
    Honors : String,
    LastName : String,
    LastUpdateDate : Date,
    LegalEntityId : Number,
    LicenseNumber : String,
    links : Array,
    MaritalStatus : String,
    MiddleName : String,
    MilitaryVetStatus : String,
    NameSuffix : String,
    NationalId : String,
    NationalIdCountry : String,
});

const Assignment = new mongoose.Schema({

    EmpId : {
        type:Number,
        required:true
    },
    ActionCode  : String,
    ActionReasonCode  :{
        type : String,
        required : true,
        minlenght : 3,
        maxlength : 8

    },
    ActualTerminationDate  : Date,
    AssignmentCategory  : String,
    assignmentDFF  : Array,
    assignmentExtraInformation  : Array,
    AssignmentId  : {
        type : Number,
        unique: [true,'Assignment id need to be unique!'] 
    },
    AssignmentName  : String,
    AssignmentNumber  : String,
    AssignmentProjectedEndDate  : Date,
    AssignmentStatus  : {
        type : String,
        enum:['running' , 'completed' , 'pending'] ,
         required:function(){
            return  this.AssignmentId;
         }},
    AssignmentStatusTypeId  : Number,
    BusinessUnitId  : Number,
    CreationDate  : Date,
    DefaultExpenseAccount  : String,
    DepartmentId  : Number,
    EffectiveEndDate  : Date,
    EffectiveStartDate  : Date,
    empreps  : Array,
    EndTime  : String,
    Frequency  : String,
    FullPartTime  : String,
    GradeId  : {type : Number,min:3 , max:10},
    GradeLadderId  : Number,
    JobId  : Number,
    LastUpdateDate  : Date,
    LegalEntityId  : Number,
    links  : Array,
    LocationId  : Number,
    ManagerAssignmentId  : Number,
    ManagerId  : {type:Number , 
        validate:{
            isAsync : true,
            validator:function(v , callback){
                setTimeout(()=>{
                   let  result =  /\d{3}/.test(v);
                   callback(result);
                } , 3000);
            }
        },
        required:[true , "manager Id is required"]

    }

});

const Student = new mongoose.Schema({

    ID : Number,
    Name : String,
    Address : String,
    Fees : {
        Amount :{
         type : Number,
         min : 10000,
         max : 50000,
         get : v => Math.round(v),
         set : v => Math.round(v)   
        },
        PaymentDate : Date,
        Status : Boolean
    } ,
    Result : {
        Hindi : Number,
        Math : Number,
        Eng : Number,
        Total:Number,
        Grade : String
    }    

});



module.exports = {Employee , Assignment , Student};
