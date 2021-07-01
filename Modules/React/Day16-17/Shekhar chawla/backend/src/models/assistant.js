const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const dSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  age: {
    type: Number
  }
})

dSchema.plugin( autoIncrement.plugin, { model:'Assistant', field:'id', startAt:1000, incrementBy: 1} )


module.exports = mongoose.model('Assistant', dSchema)