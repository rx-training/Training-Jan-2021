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
    EmpId: { type: Number, required: true },
    AssignmentId: { type: Number, required: true },
    AssignmentCategory: { type: String, required: true },
    AssignmentName: { type: String, required: true },
    AssignmentStatus: { type: String, required: true }

});

const AssignmentModel = mongoose.model("assignments", assignmentSchema);

module.exports = AssignmentModel;