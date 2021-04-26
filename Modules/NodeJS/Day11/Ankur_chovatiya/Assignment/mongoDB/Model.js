const mongoose = require('mongoose');
const Schema  = require('./schema');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/EmpDB");

var Employee = mongoose.model("Employee" , Schema.Employee);
var Assignment = mongoose.model("Assignment" , Schema.Assignment);
var Student = mongoose.model("Student" , Schema.Student);

module.exports = {Employee , Assignment , Student};


