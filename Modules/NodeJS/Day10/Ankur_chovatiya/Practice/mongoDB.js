var mongoose = require('mongoose');
const schema = require('./schema');


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/node-demo");

var User = mongoose.model("User" , schema);

module.exports = User;