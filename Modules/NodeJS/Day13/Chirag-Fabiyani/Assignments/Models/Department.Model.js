const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    DepartmentName:{
        type: String,
        required: true
    },
    Block:{
        type: String,
        enum: ["A","B","C","D"]
    }
});

module.exports = mongoose.model('Departments',DepartmentSchema);