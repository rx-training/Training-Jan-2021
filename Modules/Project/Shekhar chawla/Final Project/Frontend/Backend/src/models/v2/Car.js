const mongoose = require('mongoose')
const Counter = require('./Counter')

const carSchema = mongoose.Schema({
  carId: { type: Number },
  makeName: { type: String, required: true, unique: true },
  makeMaskingName: { type: String, lowercase: true, unique: true },
  modelName: { type: String, required: true, unique: true },
  modelMaskingName: { type: String, lowercase: true, unique: true },
  versionName: { type: String, required: true, unique: true },
  fuelType: [],
  transmissionType: { type: String },
  stateName: { type: String, required: true },
  cityName: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  priceMasking: { type: String },
  nearbyCities: [{
    nearbyCityName: { type: String, unique: true },
    price: { type: String }
  }],
  modelImages: {
    data: Buffer,
    contentType: String,
    imageName: String,
    desc: String,
    type: String  // external, internal , color
  },
  carImage: Buffer ,
  carImageContentType: String,
  carImageDesc: String,
  carImageType: String,
  carPower: { type: String }
}, {
  timestamps: true
})

function getPriceMasking(price) {
  price = '' + price
  if (price.length === 6) {
    return `${price[0]}.${price[1]}${price[2]} Lakhs`
  } else if (price.length === 7) {
    return `${price[0]}${price[1]}.${price[2]}${price[3]} Lakhs`
  }
}

carSchema.pre('save', function (next) {
  var doc = this;
  doc.makeMaskingName = doc.makeName.split(' ').join('-').toLowerCase()
  doc.modelMaskingName = doc.modelName.split(' ').join('-').toLowerCase()
  doc.priceMasking = '₹ ' + getPriceMasking(doc.price)
  Counter.findByIdAndUpdate({ _id: 'carId' }, { $inc: { value: 1 } }, function (error, counter) {
    if (error)
      return next(error);
    doc.carId = counter.value;
    next();
  });
});





module.exports = mongoose.model('Car', carSchema)





