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
    ID: 3,
    Name: "Def",
    Address: "Vadodra",
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

//Comparison Query Operator
const getAnEmployee = async (id) => {
  const employees = await Emp.find({ ID: { $gte: id } });
  console.log(employees);
};

const getAnEmployeeRange = async (id1, id2) => {
  const employees = await Emp.find({ ID: { $gte: id1, $lte: id2 } });
  console.log(employees);
};

const getAnEmployeeByAddress = async () => {
  const employees = await Emp.find({
    Address: { $in: ["Ahmedabad", "Vadodra"] },
  });
  console.log(employees);
};

//Logical Query Operator
const usingAndOprator = async () => {
  const employees = await Emp.find().and([{ ID: 1 }, { Address: "Ahmedabad" }]);
  console.log(employees);
};

const usingOrOprator = async () => {
  const employees = await Emp.find().or([{ ID: 1 }, { Address: "Ahmedabad" }]);
  console.log(employees);
};

//Regular Expressions
const usingRe = async () => {
  const employees = await Emp.find({ Name: /.*a.*/i });
  console.log(employees);
};

//Counting
const usingCount = async () => {
  const employees = await Emp.find({ Name: /.*a.*/i }).countDocuments();
  console.log(employees);
};

//Pagination
const usingPagination = async () => {
  const pageNumber = 2;
  const pageSize = 1;
  const employees = await Emp.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
  console.log(employees);
};

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

usingPagination();
