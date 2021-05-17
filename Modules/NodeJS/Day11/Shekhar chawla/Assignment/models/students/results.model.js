const mongoose = require('mongoose')
const Students = require('./students.models')

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Students'
    },
    subjects: {
      type: Map,
      of: Number
    },
    grade: { type: String, enum: ['A', 'B', 'C'] },
    total: { type: Number }
  },
  {
    timestamps: true
  }
)

resultSchema.pre('validate', function (next) {
  var sum = 0;
  for( const val of this.subjects.values() ) {
    sum += val
  }
  this.total = sum;
  next()
})

module.exports = mongoose.model('Results', resultSchema)




