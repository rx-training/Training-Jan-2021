const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Department = require('./department')
const Doctor = require('./doctor')
const Assistant = require('./assistant')
const Medicine = require('./medicine')


const pSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    uppercase: true,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
    }
  ],
  assistants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assistant'
    }
  ],
  medicines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicine'
    }
  ]
})

pSchema.plugin( autoIncrement.plugin, { model:'Patient', field:'id', startAt:100, incrementBy: 1} )


module.exports = mongoose.model('Patient', pSchema)