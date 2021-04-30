const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const BusesSchema = new Schema({
    _id: String,
    operator: {
        type : Number,
        ref : 'Operatores'
    },
    busName: String,
    busType: String,
    busReleasesate: Date,
    totalSleeperseat: Number,
    totalSeaterSeat: Number,
    totalSemiSleeperSeat: Number,
    activeStatus: Boolean,
    rating: {
        type :Number,
        default: 3.5
    },
})

const Buses = mongoose.model('Buses',BusesSchema)


module.exports = Buses