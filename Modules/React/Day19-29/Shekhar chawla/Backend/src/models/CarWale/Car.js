const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Image = require('./childs/Image')
const Video = require('./childs/Video')
const Brand = require('./childs/Brand')
const Review = require('./childs/Review')
const Rating = require('./childs/Rating')

var connection = mongoose.connect('mongodb://localhost:27017/NodePractice', { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err
  console.log('connected to mongodb')
})
// autoIncrement.initialize(connection)


var carSchema = new mongoose.Schema({
  id: Number,
  images : [{ type: mongoose.Schema.Types.ObjectId , ref: 'Image'}],
  videos : [{ type: mongoose.Schema.Types.ObjectId , ref: 'Video'}],
  brand : { type: mongoose.Schema.Types.ObjectId , ref: 'Brand'},
  version: String,
  fuel: String,
  transmission: String,
  mileage: Number,
  city: String,
  price: Number,
  reviews : [{ type: mongoose.Schema.Types.ObjectId , ref: 'Review'}],
  rating : [{ type: mongoose.Schema.Types.ObjectId , ref: 'Rating'}],
  name: String
},
{
  timestamps: true,
  collection: 'Cars',
  bufferTimeoutMS: 5000 
})

// carSchema.plugin( autoIncrement.plugin, { model: 'Student', field: 'id', startAt: 1, IncrementBy: 1})

module.exports = mongoose.model('Car', carSchema)






