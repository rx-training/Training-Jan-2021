const mongoose = require('mongoose');

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const employeeSchema = new mongoose.Schema({
    EmpId: { 
        type: Number, 
        required: true 
    },
    FirstName: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255 
    },
    LastName: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
    },
    DateOfBirth: { 
        type: Date, 
        required: true 
    },
    AddressLine1: { 
        type: String, 
        required: true,
        minlength:10,
        maxlength: 512
    },
    City: { 
        type: String, 
        required: true, 
    },
    State: { 
        type: String, 
        required: true 
    },
    Country: { 
        type: String, 
        required: true 
    },
    HireDate: { 
        type: Date, 
        required: true 
    }
});

const EmployeeModel = mongoose.model('employees', employeeSchema);

module.exports = EmployeeModel;