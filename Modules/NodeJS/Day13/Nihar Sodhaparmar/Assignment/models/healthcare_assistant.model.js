const mongoose = require('mongoose');
const Joi = require('joi');

// model
const HealthcareAssistant = mongoose.model('healthcareassistants', new mongoose.Schema({
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
    department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'departments'
    }
}));

// validating using joi
function validateHealthcareAssistant(healthcareAssistant){
    const schema = {
        name: Joi.string().required(),
        phone: Joi.string().min(10).required(),
        department: Joi.objectId().required()
    }

    return Joi.validate(healthcareAssistant, schema);
}

module.exports.HealthcareAssistant = HealthcareAssistant;
module.exports.validate = validateHealthcareAssistant;