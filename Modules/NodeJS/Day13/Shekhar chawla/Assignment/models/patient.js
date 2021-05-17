const mongoose = require('mongoose')
const Department = require('./department')
const Doctor = require('./doctor')
const Assistant = require('./assistant')
const Medicine = require('./medicine')


const pSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('Patient', pSchema)