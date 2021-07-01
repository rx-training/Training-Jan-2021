const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const mSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
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

mSchema.plugin( autoIncrement.plugin, { model:'Medicine', field:'id', startAt:100, incrementBy: 1} )

module.exports = mongoose.model('Medicine', mSchema)