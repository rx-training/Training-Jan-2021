const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const occupiedSeatsSchema = new Schema({
    routeId : {
        type:Number,
        ref : 'MainRoute',
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
    occupiedSeats : [ Number ]
})

const OccupiedSeats =  mongoose.model('OccupiedSeats', occupiedSeatsSchema);

module.exports = OccupiedSeats