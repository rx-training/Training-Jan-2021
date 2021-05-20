const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: Number,
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  pob: { type: String, required: true },
  gender: { type: String, required: true },
  language: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pin: { type: Number, required: true },
  fFirstName: { type: String, required: true },
  fMiddleName: { type: String, required: true },
  fLastName: { type: String, required: true },
  fEmail: { type: String, required: true },
  fEdq: { type: String, required: true },
  fProfession: { type: String, required: true },
  fDesignation: { type: String, required: true },
  fPhone: { type: Number, required: true },
  mFirstName: { type: String, required: true },
  mMiddleName: { type: String, required: true },
  mLastName: { type: String, required: true },
  mEmail: { type: String, required: true },
  mEdq: { type: String, required: true },
  mProfession: { type: String, required: true },
  mDesignation: { type: String, required: true },
  mPhone: { type: Number, required: true },
  eName: { type: String, required: true },
  eRelation: { type: String, required: true },
  eNumber: { type: Number, required: true },
  reference: { type: String, required: true },
  rAddress: { type: String, required: true },
  stdImg: { type: String, required: true },
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = StudentModel;
