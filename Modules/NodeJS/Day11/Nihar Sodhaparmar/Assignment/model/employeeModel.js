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
    EmpId: { type: Number, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    DateOfBirth: { type: String, required: true },
    AddressLine1: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    HireDate: { type: String, required: true }
});

const EmployeeModel = mongoose.model('employees', employeeSchema);

module.exports = EmployeeModel;