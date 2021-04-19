const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: Number,
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  Fees: [
    {
      Amount: { type: Number, min: 0 },
      PaymentDate: Date,
      Status: Boolean,
    },
  ],
  Result: [
    {
      Hindi: { type: Number, min: 0 },
      Eng: { type: Number, min: 0 },
      Math: { type: Number, min: 0 },
      Total: { type: Number, min: 0 },
      Grade: String,
    },
  ],
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;
