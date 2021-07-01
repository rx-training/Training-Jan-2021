const mongoose = require('mongoose')
const Counter = require('./Counter')


const makeSchema = mongoose.Schema({
  makeId: { type: Number },
  makeName: { type: String, required: true, unique: true },
  makeDesc: { type: String, required: true, unique: true },
  makePriceStart: String,
  makePriceEnd: String,
  makeMaskingName: { type: String, lowercase: true, unique: true },
  makeImage: Buffer,
  makeImageContentType: String,
  makeImageDesc: String,
}, {
  timestamps: true
})


makeSchema.pre('save', function (next) {
  var doc = this;
  doc.makeMaskingName = doc.makeName.split(' ').join('-').toLowerCase()
  Counter.findByIdAndUpdate({ _id: 'makeId' }, { $inc: { value: 1 } }, function (error, counter) {
    if (error)
      return next(error);
    doc.makeId = counter.value;
    next();
  });
});





module.exports = mongoose.model('Make', makeSchema)



