const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  Address: {
    type: String,
    required: true
  },
  Fees: [
    {
      Amount: {
        type: Number,
        min: 500,
        max: 5000
      },
      PaymentDate: {
        type: Date,
        required: true
      },
      Status: {
        type: Boolean,
        required: true
      },
    },
  ],
  Result: [
    {
      Hindi: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      Eng: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      Math: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      Total: {
        type: Number,
        required: true,
        min: 0,
        max: 300
      },
      Grade: {
        type: String,
        required: true,
        enum: ['A', 'AB', 'B', 'BB', 'C', 'BC', 'F'],
        uppercase: true
      },
    },
  ],
});

const StudentModel = mongoose.model("students", studentSchema);

module.exports = StudentModel;