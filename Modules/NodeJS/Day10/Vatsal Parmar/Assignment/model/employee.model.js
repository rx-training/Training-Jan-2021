const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/db1";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const employeeSchema = new mongoose.Schema({
  _id: Number,
  FirstName: String,
  LastName: String,
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
