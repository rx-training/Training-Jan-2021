const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

var connection = mongoose.createConnection('mongodb://localhost:27017/College', { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err
})

autoIncrement.initialize(connection)

var additionalSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  education: String,
  profession: String,
  designation: String
}, { _id: false })

var addressSchema = new mongoose.Schema({
  city: String,
  state: String,
  country: String,
  pin: Number
}, { _id: false })

var referenceSchema = new mongoose.Schema({
  name: String,
  address: addressSchema,
  telNo: Number
}, { _id: false })



// Student Schema
var studentSchema = new mongoose.Schema({
  id: Number,
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  dob: Date,
  placeOfBirth: String,
  firstLanguage: String,
  gender: String,
  address: addressSchema,
  father: additionalSchema,
  mother: additionalSchema,
  emergency: {
    type: Map,
    of: Number
  },
  reference: [referenceSchema],
  photo: {
    data: Buffer,
    contentType: String
  }

},
  {
    timestamps: true,
    collection: 'Students',
    bufferTimeoutMS: 5000
  })

studentSchema.plugin(autoIncrement.plugin, { model: 'Student', field: 'id', startAt: 1, IncrementBy: 1 })

module.exports = mongoose.model('Student', studentSchema)










/*
Create a Student Admission Form with Following Field
Name –(First/Middle/Last)
DOB
Place of Birth
First Language
Address- City State Country Pin
Father: FullName –First/Middle/Last
                Email
                Education Qualification
                Profession
                Designation
                Phone
Mother: FullName –First/Middle/Last
                Email
                Education Qualification
                Profession
                Designation
                Phone
Emergency Contact List
                Relation
                Number
Reference Details
Reference Through
Address with Tel No:
*/
