const mongoose = require('mongoose');
const LoginSchema = require('./Schema');
const Schema = require('./Schema');


mongoose.connect("mongodb://localhost:27017/AuthDB");

const User = mongoose.model("User" , Schema.LoginSchema);
const Student = mongoose.model("Student" , Schema.StudentSchema);

module.exports = {User , Student};