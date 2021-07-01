const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['exterior', 'interior', 'color']
  },
  name: String,
  clickedBy: String,
  path: String
}, { timestamps: true })

module.exports = mongoose.model('Image', imageSchema)