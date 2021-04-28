const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const TripSchema = new Schema({
    fromCity:  {
        type : Number,
        ref : 'Cities'
    },
    toCity: {
        type : Number,
        ref : 'Cities'
    },
    userId: {
        type : Number,
        ref : 'Users'
    },
    routeId: {
        type : Number,
        ref : 'MainRoute'
    },
    bookIngDate: Date,
    tripDate: Date,
    farePrice: Number,
    totalSeat: Number,
    seatNo: Array,
})

const Trip = mongoose.model('Trip',TripSchema)

module.exports = Trip