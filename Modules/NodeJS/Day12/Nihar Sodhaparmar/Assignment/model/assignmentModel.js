const mongoose = require('mongoose');

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const assignmentSchema = new mongoose.Schema({
    EmpId: { 
        type: Number, 
        required: true 
    },
    AssignmentId: { 
        type: Number, 
        required: true 
    },
    AssignmentCategory: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255 
    },
    AssignmentName: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255 
    },
    AssignmentStatus: { 
        type: String, 
        required: true,
        enum: [ 'completed', 'pending' ],
        lowercase: true 
    }

});

const AssignmentModel = mongoose.model("assignments", assignmentSchema);

module.exports = AssignmentModel;