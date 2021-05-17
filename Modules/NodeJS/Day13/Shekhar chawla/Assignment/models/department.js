const mongoose = require('mongoose')

const dSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    uppercase: true,
    required: true
  }
})

module.exports = mongoose.model('Department', dSchema)