const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['comfort', 'maintenance']
  },
  name: String,
  star: Number
}, { timestamps: true })


module.exports = mongoose.model('Rating', ratingSchema)