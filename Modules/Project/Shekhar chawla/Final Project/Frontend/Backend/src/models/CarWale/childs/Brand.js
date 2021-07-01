const mongoose = require('mongoose')
const Car = require('../Car')


const brandSchema = new mongoose.Schema({
  name: String,
  cars: [{ type: mongoose.Schema.Types.ObjectId , ref: 'Car'}],
  contactNumber: Number
}, { timestamps: true })

module.exports = mongoose.model('Brand', brandSchema)