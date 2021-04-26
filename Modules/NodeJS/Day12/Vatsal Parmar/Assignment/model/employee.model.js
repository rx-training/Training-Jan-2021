const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  _id: Number,
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Assignments: [
    {
      _id: Number,
      AssignmentCategory: String,
      AssignmentName: String,
      AssignmentStatus: String,
    },
  ],
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = EmployeeModel;
