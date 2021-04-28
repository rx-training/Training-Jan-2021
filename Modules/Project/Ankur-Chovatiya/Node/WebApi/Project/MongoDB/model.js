const mongoose = require('mongoose');
const schema = require('./Schema');


mongoose.connect("mongodb://localhost:27017/AirIndiaDB")
.then(response =>{
    console.log('connected to mongoDB...');
}).catch(err =>{
    console.log('unable to connect mongoDb...');
});


const Aircraft = new mongoose.model('Aircraft' ,schema.AircraftSchema);
const Address = new mongoose.model('Address' , schema.AddressSchema);
const Airport = new mongoose.model('Airport' , schema.AirportSchema);
const Route = new mongoose.model('Route' , schema.RouteSchema);
const Employee = new mongoose.model('Employee' , schema.EmployeeSchema);
const AirFare = new mongoose.model('AirFare' , schema.AirFareSchema);
const Flight = new mongoose.model('Flight' , schema.FlightSchema);
const Policy = new mongoose.model('policy' , schema.PolicySchema);
const Offer = new mongoose.model('offer' , schema.OfferSchema);
const Login = new mongoose.model('login' , schema.loginSchema);
const User = new mongoose.model('User' , schema.userSchema);
const Passenger = new mongoose.model('Passenger' , schema.passengerSchema);
const Transation = new mongoose.model('Transaction' , schema.bookingTransactionSchema);
const CommonUser = new mongoose.model('CommonUser' , schema.commonUser);


module.exports = {Aircraft , Address , Airport , Route , Employee ,
     AirFare , Flight , Policy , Offer , User , Passenger , Transation , CommonUser};