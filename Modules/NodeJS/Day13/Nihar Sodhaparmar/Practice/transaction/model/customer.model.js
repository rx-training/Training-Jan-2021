const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('customers', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15
    },
    address: {
        type: String,
        minlength: 5,
        maxlength: 255
    }
}));

function validateCustomer(customer){
    const schema = {
        name: Joi.string().required(),
        phone: Joi.string().min(10).required(),
        address: Joi.string().min(5).required()
    }

    return Joi.validate(customer, schema)
}

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;