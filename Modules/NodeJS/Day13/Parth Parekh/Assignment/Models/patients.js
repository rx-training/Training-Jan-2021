const mongoose = require("mongoose");
//const department = require('./department');


const patientsSchema = new mongoose.Schema({
    _id: Number,
    patientName: { type: String, required: true, trim: true },
    department: {
        type: Number,
        ref: "department"
    },
    drugs: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "drug",
            },
            drugstime: [
                { type: String, enum: ["morning", "afternoon", "night"] }
            ],
        },
    ],
});

const PatientModel = mongoose.model("patient", patientsSchema);

module.exports = PatientModel;

const insertPatients = async () => {
    const drug = new PatientModel({
        _id: 3,
        patientName: "Lion",
        department: 2,
        drugs: [
            {
                _id: "607fd5b443ea4d1644b7adf9",
                drugstime: ["night", "morning"],
            },
            {
                _id: "607fd5bfa0329e2c14fea5a3",
                drugstime: ["morning"],
            },
        ],
    });
    const result = await drug.save();
    console.log(result);
};
//insertPatients();
const listdata = async () => {
    const result = await PatientModel.find().populate('department');
    //.populate('department' , '-__v');
    console.log(result);
};
//listdata();
