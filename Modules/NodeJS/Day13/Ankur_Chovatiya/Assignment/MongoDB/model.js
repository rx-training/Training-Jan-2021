const mongoose = require('mongoose');
const schema = require('./schema');


mongoose.connect("mongodb://localhost/Hospital").then(respone =>{
    console.log('connected to mongoDb...')
});


const Doctor = new mongoose.model('doctor' , schema.doctorSchema);
const Assistant = new mongoose.model('assistant' , schema.assistantsSchema); 
const Department = new mongoose.model('department' , schema.departmentSchema);
const Patient = new mongoose.model('patient' , schema.patientSchema);
const Medicine = new mongoose.model('medicine' , schema.medicineSchema);


module.exports = {Doctor , Assistant , Department , Patient , Medicine};