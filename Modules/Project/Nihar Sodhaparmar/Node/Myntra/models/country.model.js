const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Country = mongoose.model('countries', new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
        trim: true
    }
}));

// validating using joi
function validateCountry(country){
    const schema = {
        countryName: Joi.string().required()
    }

    return Joi.validate(country, schema);
}

module.exports.Country = Country;
module.exports.validateCountry = validateCountry;