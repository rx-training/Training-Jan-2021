const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Brand = mongoose.model('brands', new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        trim: true
    }
}));

// validating using joi
function validateBrand(brand){
    const schema = {
        brandName: Joi.string().required()
    }

    return Joi.validate(brand, schema);
}

module.exports.Brand = Brand;
module.exports.validateBrand = validateBrand;