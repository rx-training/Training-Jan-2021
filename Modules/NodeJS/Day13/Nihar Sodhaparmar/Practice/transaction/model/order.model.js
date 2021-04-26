const Joi = require('joi');
const mongoose = require('mongoose');

const Order = mongoose.model('orders', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true
            }
        }),
        required: true
    },
    product: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }),
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}));


function validateOrder(order){
    const schema = {
        customerId: Joi.objectId().required(),
        productId: Joi.objectId().required(),
        quantity: Joi.number().min(1).required()
    };

    return Joi.validate(order, schema);
}


module.exports.Order = Order;
module.exports.validate = validateOrder;