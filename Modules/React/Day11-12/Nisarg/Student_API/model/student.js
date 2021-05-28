const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: { type: String, trim: true, required: true },
    lastname: { type: String, trim: true, required: true },
    middlename: { type: String, trim: true, required: true },
    date: { type: String, trim: true, required: true },
    birthplace: { type: String, trim: true, required: true },
    Gender: { type: String, trim: true, required: true },
    language: { type: String, trim: true, required: true },
    city: { type: String, trim: true, required: true },
    state: { type: String, trim: true, required: true },
    country: { type: String, trim: true, required: true },
    pincode: { type: Number, trim: true, required: true },
    firstname1: { type: String, trim: true, required: true },
    lastname1: { type: String, trim: true, required: true },
    middlename1: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    edq: { type: String, trim: true, required: true },
    profession: { type: String, trim: true, required: true },
    designation: { type: String, trim: true, required: true },
    phn: { type: Number, trim: true, required: true },
    firstname2: { type: String, trim: true, required: true },
    lastname2: { type: String, trim: true, required: true },
    middlename2: { type: String, trim: true, required: true },
    email1: { type: String, trim: true, required: true },
    edq1: { type: String, trim: true, required: true },
    profession1: { type: String, trim: true, required: true },
    designation1: { type: String, trim: true, required: true },
    phn1: { type: Number, trim: true, required: true },
    Relname: { type: String, trim: true, required: true },
    relation: { type: String, trim: true, required: true },

    phn2: { type: Number, trim: true, required: true },
    reference: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    file: { type: String, trim: true, required: true },
});

const StudentModel = mongoose.model("studentdata", studentSchema);

module.exports = StudentModel;