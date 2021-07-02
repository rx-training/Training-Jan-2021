const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const CounterSchema = new Schema({
    _id : String,
    count : Number
})

const Counter = mongoose.model('Counters',CounterSchema)

module.exports = Counter