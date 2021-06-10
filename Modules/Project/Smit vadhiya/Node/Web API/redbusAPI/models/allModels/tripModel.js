const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const TripSchema = new Schema({
    fromCity:  {
        type : String
    },
    toCity: {
        type : String
    },
    userId: {
        type : Number,
        ref : 'Users'
    },
    routeId: {
        type : Number,
        ref : 'MainRoute'
    },
    travelerList : {
        type : [{
            name : String,
            gender : String,
            age : Number
        }] ,
        required : true  
    },
    bookIngDate: Date,
    tripDate: Date,
    farePrice: Number,
    seatNo: Array,
    departureTime : String,
    destinationTime :String,
})

const Trip = mongoose.model('Trip',TripSchema)

module.exports = Trip