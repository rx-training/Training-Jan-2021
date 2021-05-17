const mongoose = require('mongoose')

const mSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  dose: {
    type: String,
    enum: {
      values: ['morning', 'evening'],
      message: 'dose not valid {VALUE}'
    }
  }
})

module.exports = mongoose.model('Medicine', mSchema)