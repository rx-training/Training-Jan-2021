const mongoose = require('mongoose');
const passbookSchema = require('./passbook');
const transactionSchema = require('./transaction');
const orderSchema = require('./order');

const userSchema = new mongoose.Schema({

    name: { type: String, trim: true, required: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 16,
    },
    mobileno: {
        type: Number,
        trim: true,
    },
    balance : {type : Number , min : 0 ,require : true , default : 0},
    transactions: {
        type: [transactionSchema],
    },
    orders: {
        type: [orderSchema],
    },
});


userSchema.methods.joivalidate = (data) => {
    const Joi = require("joi");
    const schema = Joi.object({
        
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        balance : Joi.number().required(),
        mobileno : Joi.number().required(),
        
        transactions : Joi.array(),
        orders : Joi.array()
    });
    return schema.validate(data);
};

const UserModel = mongoose.model('user',userSchema);

module.exports = UserModel;

