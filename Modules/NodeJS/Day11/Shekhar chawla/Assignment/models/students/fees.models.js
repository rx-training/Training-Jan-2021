const mongoose = require('mongoose')
const Students = require('./students.models')

const feesSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Students'
    },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    status: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Fees', feesSchema)