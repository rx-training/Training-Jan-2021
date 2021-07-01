const mongoose = require('mongoose')

const Patient = require('../models/patient')
const Medicine = require('../models/medicine')
const Doctor = require('../models/doctor')
const Department = require('../models/department')
const Assistant = require('../models/assistant')


async function getPatientReport( req, res ) {
  const patient = await Patient.findOne({ _id: req.params.pid }).populate('department').populate('doctors').populate('medicines').populate('assistants').exec( (err, p) => {
    if (err) return res.send(err)
    return res.json(p)
  })
}

async function getPatientDoctorReport( req, res ) {
  const patient = await Patient.findOne({ _id: req.params.pid }).populate('doctors').exec( (err, p) => {
    if (err) return res.send(err)
    return res.json(p)
  })
}

async function getPatientMedicineReport( req, res ) {
  const patient = await Patient.findOne({ _id: req.params.pid }).populate('medicines').exec( (err, p) => {
    if (err) return res.send(err)
    return res.json(p)
  })
}



module.exports = {
  getPatientReport,
  getPatientDoctorReport,
  getPatientMedicineReport
}























/*

const m1 = new Medicine({
  _id: new mongoose.Types.ObjectId,
  name: 'longo',
  dose: 'morning'
})
const d1 = new Doctor({
  _id: new mongoose.Types.ObjectId,
  name: 'Nandu'
})
const dp1 = new Department({
  _id: new mongoose.Types.ObjectId,
  name: 'Heart'
})
const a1 = new Assistant({
  _id: new mongoose.Types.ObjectId,
  name: 'maya'
})
const p1 = new Patient({
  _id: new mongoose.Types.ObjectId,
  name: 'Maniji'
})

// Department.findOne({ name: 'Heart'}).select().exec((err, d)=> {
//   Patient.findOne({ name: 'Maniji' }).select().exec( (err,p) => {
//     p.department = d._id
//     p.save()
//   })
// })
// Doctor.findOne({ name: 'Nandu'}).select().exec((err, d)=> {
//   p1.doctors.push(d._id)
// })
// Assistant.findOne({ name: 'maya'}).select().exec((err, d)=> {
//   p1.assistants.push(d._id)
// })
// Medicine.findOne({ name: 'longo'}).select().exec((err, d)=> {
//   p1.medicines.push( d._id)
//   p1.save()
// })


*/