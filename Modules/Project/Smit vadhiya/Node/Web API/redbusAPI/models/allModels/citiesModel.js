const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const CitiesSchema = new Schema({
    _id : Number,
    cityName: String,
    state: String,
    latitude : Number,
    longitude : Number
})

const Cities = mongoose.model("Cities",CitiesSchema)

module.exports = Cities