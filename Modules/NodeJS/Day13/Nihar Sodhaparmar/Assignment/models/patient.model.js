const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Patient = mongoose.model('patients', new mongoose.Schema({
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
        required: true
    },
    doctors: {
        type: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors'
        } ],
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message: 'Patient should have atleast one doctor'
        }
    },
    healthcareassistants: {
        type: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'healthcareassistants'
        } ],
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message: 'Patient should have atleast one healthcare assistant'
        }
    }
}));

// validating using joi
function validatePatient(patient){
    const schema = {
        name: Joi.string().required(),
        phone: Joi.string().min(5).required(),
        address: Joi.string().required(),
        doctors: Joi.array().items(Joi.objectId().required()).required(),
        healthcareassistants: Joi.array().items(Joi.objectId().required()).required()
    }

    return Joi.validate(patient, schema);
}

module.exports.Patient = Patient;
module.exports.validate = validatePatient;