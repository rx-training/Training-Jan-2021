const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
  title: String,
  person: String,
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)