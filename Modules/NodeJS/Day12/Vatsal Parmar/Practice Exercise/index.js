const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/db1";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const employeeSchema = new mongoose.Schema({
  ID: Number,
  Name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
    //match: /.*a.*/,
  },
  Address: { type: String, enum: ["Ahmedabad", "Vadodara"] },
  Skills: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        setTimeout(() => {
          const result = v && v.length > 0;
          callback(result);
        }, 3000);
      },
      message: "Skills can not be empty",
    },
  },
});

const Emp = mongoose.model("emp", employeeSchema);

//To create an employee

const createEmp = async () => {
  const emp = new Emp({
    ID: 4,
    Name: "lmn",
    Address: "Surat",
    Skills: ["JavaScript", "ReactJs"],
  });
  try {
    const result = await emp.save();
    console.log(result);
  } catch (e) {
    for (field in e.errors) {
      console.log(e.errors[field].message);
    }
  }
};

//To get all employees
const getEmployees = async () => {
  const employees = await Emp.find();
  console.log(employees);
};

//to get employee by id
const getAnEmployee = async (id) => {
  const employees = await Emp.find({ ID: { $gte: id } });
  console.log(employees);
};

//to update an employee
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

createEmp();
