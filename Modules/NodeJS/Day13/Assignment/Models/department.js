const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    _id : Number,
    departmentName : { type : String , required : true }
});

const DepartmentModel = mongoose.model('department', departmentSchema);

module.exports = DepartmentModel;

const insertDepartment = async() =>{
    const drug = new DepartmentModel({
        _id: 2,
        departmentName: "General",
    });
    const result = await drug.save();
    console.log(result);
}
//insertDepartment();