const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment')

const dSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
})

dSchema.plugin( autoIncrement.plugin, { model:'Doctor', field:'id', startAt:100, incrementBy: 1} )

module.exports = mongoose.model('Doctor', dSchema)