const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpSchema = new Schema({
    Id: {
        type: String,
        unique: true,
        required: true
    },
    Address:{
        line1: {
            type: String,
            maxlength: 100,
            required: true
        },
        line2: {
            type: String,
            maxlength: 100
        },
        line3: {
            type: String,
            maxlength: 100
        }
    },
    citizenshipID: Number,
    CitizenshipLegislationCode: String,
    CitizenshipStatus: String,
    CitizenshipToDate: Date,
    City: String,
    CorrespondenceLanguage: String,
    Country: {
        type: String,
        uppercase: true
    },
    CreationDate: Date,
    DateOfBirth: Date,
    directReports: Array,
    DisplayName: String,
    DriversLicenseExpirationDate: Date,
    DriversLicenseId: Number,
    DriversLicenseIssuingCountry: String,
    EffectiveStartDate: Date,
    FirstName: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        enum: ['Male','Female','Others']
    },
    HireDate: Date,
    HomeFaxAreaCode: String,
    HomeFaxCountryCode: String,
    HomeFaxExtension: String,
    HomeFaxLegislationCode: String,
    HomeFaxNumber: String,
    LastName: {
        type: String,
        required: true
    },
    LastUpdateDate: Date,
    LicenseNumber: String,
    links: {
        type: Array,
        validate:{
            validator: function(v){
                return v && v.length>=1;
            }
        },
        message: "Enter atleast one link"
    },
    MaritalStatus: {
        type: String,
        enum: ['Married','Single']
    },
    MiddleName: {
        type: String,
        required: true
    },
    NameSuffix: String,
    NationalId: Number,
    NationalIdCountry: Number,
    Assignments:[
        {
            ActionCode: String,
            ActionReasonCode: String,
            ActualTerminationDate: Date,
            AssignmentCategory: String,
            AssignmentDFF: Array,
            AssignmentExtraInformation: Array,
            AssignmentId: {
                type: String,
                unique: true,
                required: true
            },
            AssignmentName: {
                type: String,
                required: true
            },
            AssignmentNumber: {
                type: String,
                required: true
            },
            AssignmentProjectedEndDate: Date,
            AssignmentStatus: String,
            AssignmentStatusTypeId: Number,
            BusinessUnitId: Number,
            CreationDate: Date,
            DefaultExpenseAccount: String,
            DepartmentId: Number,
            EffectiveEndDate: Date,
            EffectiveStartDate: Date,
            Empreps: Array,
            EndTime: String,
            Frequency: String,
            FullPartTime: String,
            GradeId: Number,
            GradeLadderId: Number,
            JobId: Number,
            LastUpdateDate: Date,
            LegalEntityId: Number,
            links: {
                type: Array,
                validate:{
                    validator: function(v){
                        return v && v.length>=1;
                    }
                },
                message: "Enter atleast one link"
            },
            LocationId: Number,
            ManagerAssignmentId: Number,
            ManagerId: Number,
        }]
});

module.exports = mongoose.model('EmpData',EmpSchema);