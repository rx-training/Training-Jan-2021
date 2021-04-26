const Joi = require('joi');
const mongoose = require('mongoose');

const Product = mongoose.model('products', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0
    }
}));


function validateProduct(product){
    const schema = {
        name: Joi.string().required(),
        price: Joi.number().required(),
        numberInStock: Joi.number().required()
    }

    return Joi.validate(product, schema);
}

module.exports.Product = Product;
module.exports.validate = validateProduct;