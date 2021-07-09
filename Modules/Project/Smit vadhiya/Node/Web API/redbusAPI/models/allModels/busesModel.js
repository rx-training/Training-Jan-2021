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
    busReleaseDate: {
        type : Date,
        default : new Date()
    },
    totalSleeperseat: {
        type : Number,
        default : 30
    },
    totalSeaterSeat: Number,
    totalSemiSleeperSeat: Number,
    activeStatus: {
        type : Boolean,
        default :true
    },
    rating: {
        type :Number,
        default: 3.5
    },
})

const Buses = mongoose.model('Buses',BusesSchema)


module.exports = Buses