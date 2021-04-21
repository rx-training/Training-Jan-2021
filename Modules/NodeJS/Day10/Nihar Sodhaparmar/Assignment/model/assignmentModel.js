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

const assignmentSchema = new mongoose.Schema({
    EmpId: Number,
    AssignmentId: Number,
    AssignmentCategory: String,
    AssignmentName: String,
    AssignmentStatus: String

});

const AssignmentModel = mongoose.model("assignments", assignmentSchema);

module.exports = AssignmentModel;