const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Seller = mongoose.model('sellers', new mongoose.Schema({
    sellerName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    },
    contactNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15
    },
    dob: {
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['M', 'F'],
        uppercase: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    },
    address: {
        type: new mongoose.Schema({
            addressLine1: {
                type: String,
                required: true
            },
            addressLine2: {
                type: String
            },
            pincode: {
                type: String,
                required: true,
                minlength: 6,
                maxlength: 10
            },
            city: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        }),
        required: true
    }
}));

// validating using joi
function validateSeller(seller){
    const schema = {
        sellerName: Joi.string().required(),
        email: Joi.string().regex(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')).required(),
        contactNumber: Joi.string().min(10).required(),
        dob: Joi.date().required(),
        gender: Joi.string().valid('M', 'F').required(),
        password: Joi.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})')).required(),
        address: Joi.object().keys({
            addressLine1: Joi.string().required(),
            addressLine2: Joi.string(),
            pincode: Joi.string().required(),
            city: Joi.objectId().required()
        }).required()
    }

    return Joi.validate(seller, schema);
}

module.exports.Seller = Seller;
module.exports.validateSeller = validateSeller;