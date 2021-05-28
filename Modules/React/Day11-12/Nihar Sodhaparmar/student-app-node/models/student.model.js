const mongoose = require("mongoose");

// model
const Student = mongoose.model(
  "students",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    birthPlace: {
      type: String,
      required: true,
      trim: true,
    },
    firstLanguage: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    pincode: {
      type: String,
      required: true,
      trim: true,
    },
    fatherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherEmail: {
      type: String,
      required: true,
      trim: true,
    },
    fatherEducation: {
      type: String,
      required: true,
      trim: true,
    },
    fatherProfession: {
      type: String,
      required: true,
      trim: true,
    },
    fatherDesignation: {
      type: String,
      required: true,
      trim: true,
    },
    fatherPhoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    motherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    motherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    motherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    motherEmail: {
      type: String,
      required: true,
      trim: true,
    },
    motherEducation: {
      type: String,
      required: true,
      trim: true,
    },
    motherProfession: {
      type: String,
      required: true,
      trim: true,
    },
    motherDesignation: {
      type: String,
      required: true,
      trim: true,
    },
    motherPhoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    relation: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyPhoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    referenceThrough: {
      type: String,
      trim: true,
    },
    referenceAddress: {
      type: String,
      trim: true,
    },
    studentImage: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

module.exports.Student = Student;
