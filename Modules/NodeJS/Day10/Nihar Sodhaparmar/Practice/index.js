const mongoose = require('mongoose');

const database = 'mongodb://localhost/EmployeeDB';

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MonoDB Connected...");
});


var db = mongoose.connection;
//Bind connection to error event to get notification of connection errors
db.on("error", console.error.bind(console, "MongoDB connection error"));
//console.log(db);

const employeeSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Skills: [String],
});


const EmployeeModel = mongoose.model("employees", employeeSchema);

//INSERT EMPLOYEE
const addEmployee = async () => {

    let employee = new EmployeeModel({
        ID: 1,
        Name: "Nihar",
        Address: "Nadiad",
        Skills: ["Javascript", "Node", "Bootstrap"]
    });

    const result = await employee.save();
    console.log(result);
};
//addEmployee();


//GET ALL EMPLOYEES
const getEmployees = async () => {
    let employees = await EmployeeModel.find();
    console.log(employees);
};
//getEmployees();


//GET EMPLOYEE BY ID
const getEmployeeById = async (id) => {
    let employee = await EmployeeModel.find({ ID: id});
    console.log(employee);
};
//getEmployeeById(1);


//UPDATE EMPLOYEE
const updateEmployee = async (id, name, address) => {
    const result = await EmployeeModel.updateOne(
        { ID: id},
        {
            $set: {
                Name: name,
                Address: address
            }
        }
    );

    console.log(result);
};
//updateEmployee(1, "Nihar Sodha", "Ahmedabad");


//DELETE EMPLOYEE
const deleteEmployee = async (id) => {
    const result = await EmployeeModel.deleteOne({ ID: 1});
    console.log(result);
};
//deleteEmployee(1);