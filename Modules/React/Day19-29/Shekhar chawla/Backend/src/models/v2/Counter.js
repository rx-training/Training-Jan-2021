const mongoose = require('mongoose')

const counter = mongoose.Schema({
  _id : { type: String, required: true},
  value : { type: Number, default: 0 }
})

module.exports = mongoose.model('Counter', counter)