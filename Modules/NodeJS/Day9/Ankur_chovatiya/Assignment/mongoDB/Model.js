const mongoose = require('mongoose');
const resultSchema  = require('./schema');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/student");

var User = mongoose.model("User" , resultSchema);


module.exports = User;


