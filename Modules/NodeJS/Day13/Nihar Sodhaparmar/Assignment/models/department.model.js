const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Department = mongoose.model('departments', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    }
}));

// validating using joi
function validateDepartment(department){
    const schema = {
        name: Joi.string().min(5).required()
    }

    return Joi.validate(department, schema);
}

module.exports.Department = Department;
module.exports.validate = validateDepartment;

// doctors

// patients

// health care assistant

//prescription