const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')


var connection = mongoose.createConnection('mongodb://localhost/NodePractice', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, (err) => {
  if( err ) throw err
})
autoIncrement.initialize(connection)

const dSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    uppercase: true,
    required: true
  }
})

dSchema.plugin( autoIncrement.plugin, { model:'Department', field:'id', startAt:1, incrementBy: 1} )

module.exports = mongoose.model('Department', dSchema)