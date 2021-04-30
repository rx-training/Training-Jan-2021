const mongoose = require('mongoose');
const Joi = require('joi');

// model
const City = mongoose.model('cities', new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'states'
    }
}));

// validating using joi
function validateCity(state){
    const schema = {
        cityName: Joi.string().required(),
        state: Joi.objectId().required()
    }

    return Joi.validate(state, schema);
}

module.exports.City = City;
module.exports.validateCity = validateCity;