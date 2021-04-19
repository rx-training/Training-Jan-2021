const mongoose = require('mongoose');
const database = 'mongodb://localhost/EmployeeDB';

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MonoDB Connected...");
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const employeeSchema = new mongoose.Schema({
    EmpId: Number,
    FirstName: String,
    LastName: String,
    DateOfBirth: String,
    AddressLine1: String,
    City: String,
    State: String,
    Country: String,
    HireDate: String
});

const EmployeeModel = mongoose.model('employees', employeeSchema);

module.exports = EmployeeModel;