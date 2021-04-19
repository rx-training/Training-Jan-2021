const { number } = require('joi');
const mongoose = require('mongoose');

const Employee = new mongoose.Schema({
    Address:{
        line1: String,
        line2: String,
        line3: String
    },
    Assignments :Array,
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

    ActionCode  : String,
    ActionReasonCode  : String,
    ActualTerminationDate  : Date,
    AssignmentCategory  : String,
    assignmentDFF  : Array,
    assignmentExtraInformation  : Array,
    AssignmentId  : Number,
    AssignmentName  : String,
    AssignmentNumber  : String,
    AssignmentProjectedEndDate  : Date,
    AssignmentStatus  : String,
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
    GradeId  : Number,
    GradeLadderId  : Number,
    JobId  : Number,
    LastUpdateDate  : Date,
    LegalEntityId  : Number,
    links  : Array,
    LocationId  : Number,
    ManagerAssignmentId  : Number,
    ManagerId  : Number

});

const Student = new mongoose.Schema({

    ID : Number,
    Name : String,
    Address : String,
    Fees : {
        Amount : Number,
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
