const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const MainRouteSchema = new Schema({
    _id: Number,
    busNumber: {
        type : String,
        ref : 'Buses'
    },
    fromCity: {
        type : Number,
        ref : 'Cities'
    },
    toCity: {
        type : Number,
        ref : 'Cities'
    },
    subCities :{
        type : [{
            type : Number,
            ref : 'Cities'
        }]
    } ,
    fromTime: String,
    toTime: String,
    activeStatus: Boolean,
})

const MainRoute = mongoose.model('MainRoute',MainRouteSchema)

module.exports = MainRoute