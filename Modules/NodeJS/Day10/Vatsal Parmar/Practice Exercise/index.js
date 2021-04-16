const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/db1";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const employeeSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  Address: String,
  Skills: [String],
});

const Emp = mongoose.model("emp", employeeSchema);

//To create an employee
const createEmp = async () => {
  const emp = new Emp({
    ID: 2,
    Name: "Xyz",
    Address: "Ahmedabad",
    Skills: ["JavaScript", "ReactJs"],
  });

  const result = await emp.save();
  console.log(result);
};

//To get all employees
const getEmployees = async () => {
  const employees = await Emp.find();
  console.log(employees);
};

//To get an employee by ID
const getAnEmployee = async (id) => {
  const employees = await Emp.find({ ID: id });
  console.log(employees);
};

//To update employee data
const updateEmployee = async (id) => {
  const result = await Emp.updateOne(
    { ID: id },
    {
      $set: {
        Address: "Vadodra",
      },
    }
  );
  console.log(result);
};

//To remove employee
const removeEmployee = async (id) => {
  const result = await Emp.deleteOne({ ID: id });
  console.log(result);
};

getAnEmployee(1);
