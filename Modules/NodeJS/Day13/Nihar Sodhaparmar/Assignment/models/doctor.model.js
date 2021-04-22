const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Doctor = mongoose.model('doctors', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departments'
    }
}));

// validating using joi
function validateDoctor(doctor){
    const schema = {
        name: Joi.string().required(),
        specialization: Joi.string().required(),
        department: Joi.objectId().required()
    }

    return Joi.validate(doctor, schema);
}

module.exports.Doctor = Doctor;
module.exports.validate = validateDoctor;