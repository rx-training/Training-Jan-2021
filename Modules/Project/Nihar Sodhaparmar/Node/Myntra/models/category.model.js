const mongoose = require('mongoose');
const Joi = require('joi');

// model
const Category = mongoose.model('categories', new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        trim: true
    }
}));

// validating using joi
function validateCategory(category){
    const schema = {
        categoryName: Joi.string().required()
    }

    return Joi.validate(category, schema);
}

module.exports.Category = Category;
module.exports.validateCategory = validateCategory;