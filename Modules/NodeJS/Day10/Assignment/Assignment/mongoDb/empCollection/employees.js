const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Students',{useNewUrlParser: true, useUnifiedTopology: true})
    .then()
    .catch(err => console.log('could not connect to server .....',err))

const employeeSchema = mongoose.Schema({
    AddressLine1: String,
    AddressLine2: String,
    AddressLine3: String,
    assignments: [ Number ],
    CitizenshipId: Number ,
    CitizenshipLegislationCode: String,
    CitizenshipStatus: String,
    CitizenshipToDate: Date,
    City: String,
    CorrespondenceLanguage: String,
    Country: String,
    CreationDate: Date,
    DateOfBirth: Date,
    directReports: [ Number ],
    DisplayName: String,
    DriversLicenseExpirationDate: Date,
    DriversLicenseId: Number ,
    DriversLicenseIssuingCountry: String,
    EffectiveStartDate: Date,
    Ethnicity: String,
    FirstName: String,
    Gender: String,
    HireDate: Date,
    HomeFaxAreaCode: String,
    HomeFaxCountryCode: String,
    HomeFaxExtension: String,
    HomeFaxLegislationCode: String,
    HomeFaxNumber: String,
    HomePhoneAreaCode: String,
    HomePhoneCountryCode: String,
    HomePhoneExtension: String,
    HomePhoneLegislationCode: String,
    HomePhoneNumber: String,
    Honors: String,
    LastName: String,
    LastUpdateDate: Date,
    LegalEntityId: Number ,
    LicenseNumber: String,
    links: [ Number ],
    MaritalStatus: String,
    MiddleName: String,
    MilitaryVetStatus: String,
    NameSuffix: String,
    NationalId: String,
    NationalIdCountry: String
})

const Employees = mongoose.model('Employees',employeeSchema)

module.exports = Employees
