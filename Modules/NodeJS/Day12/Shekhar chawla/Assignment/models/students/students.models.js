const mongoose = require('mongoose')
const Result = require('./results.model')
const Fees = require('./fees.models')

const studentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  fees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fees' }],
  result: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Result' }]
})


module.exports = mongoose.model('Students', studentsSchema)








/*
db.createCollection('student')

db.student.insert({_id: "itemId", seqValue: 0})

function getSequenceNextValue(seqName) {
  var seqDoc = db.student.findAndModify({
    query: { _id: seqName },
    update: { $inc: { seqValue: 1 } },
    new: true
  });
  console.log(seqDoc)
  return seqDoc.seqValue;
}

db.student.insert({
  _id: getSequenceNextValue("itemId"),
  student_id: "45652",
  course: "Bachelor of Science in Computer Engineering",
  year_level: "2nd",
  department: "engineering"
});
*/