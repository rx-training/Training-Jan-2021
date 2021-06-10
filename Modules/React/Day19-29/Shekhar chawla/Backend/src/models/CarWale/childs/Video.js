const mongoose = require('mongoose')


const videoSchema = new mongoose.Schema({
  name: String,
  clickedBy: String,
  path: String
}, { timestamps: true })

module.exports = mongoose.model('Video', videoSchema)