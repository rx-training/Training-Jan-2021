const mongoose = require('mongoose');


const AircraftSchema = new mongoose.Schema({
    AircraftId :{
        type : Number,
        required : true
    },
    AircraftName : String,
    AircraftNumber : String ,
    AircraftType : String,
    Seats : [String]
});

const AddressSchema = new mongoose.Schema({
    AddressId : Number,
    Country : String,
    State : String ,
    City : String ,
    Pincode : Number ,
    Street : String

})

const AirportSchema = new mongoose.Schema({
    AirportId : {
        type : Number,
        required : true
    },
    AirportName : String ,
    AirportAddress : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Address'
    }
});

const RouteSchema = new mongoose.Schema({
    RouteId :{
        type : Number,
        required : true
    },
    RouteNumber : String ,
    SourcePoint : String ,
    DestinationPoint : String

});

const EmployeeSchema = new mongoose.Schema({
    EmployeeId : Number,
    FirstName :  String ,
    LastName : String , 
    Designation : String , 
    ContactNo : Number , 
    BranchName : String ,
    EmailId : String ,
    Address : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Address'
    } 
});

const AirFareSchema = new mongoose.Schema({
    AirFareId : Number,
    FareAmount : Number , 
    ExtraFare : Number , 
    SpecialServicesFare : Number , 
})

const FlightSchema = new mongoose.Schema({
    FlightId : Number , 
    FlightName : String ,
    Economy : {
        type : String ,
        enum : ["Bussiness" , "First"]
    },
    TakeoffPoint : String , 
    LandingPoint : String ,
    TackoffDate : Date ,
    LandingDate : Date,
    Aircraft : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Aircraft'
    },
    Route : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Route'
    },
    AirFare : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'AirFare'
    } 

});

const PolicySchema = new mongoose.Schema({
    PolicyId : Number ,
    PolicyName : String , 
    PolicyDescription : String ,
    PolicyRule : String 
});

const OfferSchema = new mongoose.Schema({
    OfferId : Number ,
    OfferName : String ,
    OfferCode : String ,
    OfferAmount : Number 

});

const loginSchema = new mongoose.Schema({
    userName : {
        type : String ,
        required : true 
    } ,
    password :{
        type : String ,
        required : true
    } 

})

const userSchema = new mongoose.Schema({
    UserId : {
        type : Number , 
        required : true
    },
    Title : String , 
    Gender  :{
        type : String ,
        enum : ["Female" , "Male" , "Other"]
    } ,
    FirstName : String ,
    LastName : String ,
    NameOnCard : String ,
    DateOfBirth : Date ,
    MothersMaidenName : String ,
    Nationality : String ,
    Country : String , 
    PassportNumber : String ,
    PassportExDate : Date ,
    IdProof : String ,
    Address :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Address'
    } ,
    MobileNo : Number ,
    EmailId : {
        type : String , 
        required : true 
    },
    UpdateVaiMail : Boolean ,
    ReturnViaMail : Boolean ,
    NotificationViaMail : Boolean,
    UpdateVaiSMS : Boolean ,
    ReturnViaSMS : Boolean ,
    NotificationViaSMS : Boolean ,
    Password : String ,

});

const passengerSchema = new mongoose.Schema({
    PassengerId : {
        type : Number , 
        required : true
    },
    Title : String ,
    FirstName : String ,
    LastName : String ,
    FrequentFlyerProgram : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Offer'
    },
    FrequentFlyerNumber : String ,
    MealSelection : String,
    AvailDomesticConcession : Boolean,
    ConcessionType : String,
    Adults : Number,
    Children : Number ,
    Infants : Number ,
    PromotionCode :{
        type :mongoose.Schema.Types.ObjectId ,
        ref : 'Offer'
    },
    AddGstInfo : Boolean,
    SpecialAssistanceRequest : String ,
    MobileNo : Number, 
    PrimaryEmail : String ,
    ScecondaryEmail : String
});

const bookingTransactionSchema = new mongoose.Schema({
    TransactionId : {
        type : Number ,
        required : true
    },
    TransactionDateTime : Date,
    PaymentType : String , 
    PaymentMethod : String ,
    PaymentDetails : {
        BankName : String ,
        AcNo : String ,
        Exdate : Date ,
        UpiId : String ,
        walletid : String 
    },
    TotalPayableAmount : Number ,
    PassengerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Passenger'
    }
});

const commonUser = new mongoose.Schema({
    username : {
        type : String , 
        required : true ,
    },
    emailId : {
        type : String ,
        required : true 
    },
    password : {
        type : String ,
        required : true
    },
    isAdmin : Boolean
})

module.exports = {AircraftSchema , AddressSchema , AirportSchema , RouteSchema ,
     EmployeeSchema , AirFareSchema , FlightSchema , PolicySchema , OfferSchema , 
     loginSchema , userSchema  , passengerSchema , bookingTransactionSchema , commonUser};