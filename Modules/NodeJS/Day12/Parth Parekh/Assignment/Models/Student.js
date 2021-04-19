const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
    _id: Number,
    Name: { type: String, required: true, trim: true },
    Address: { type: String, required: true, trim: true },
    Fees: [
        {
            Amount: Number,
            PaymentDate: Date,
            Status: Boolean,
        },
    ],
    Result: [
        {
            Hindi: Number,
            Eng: Number,
            Math: Number,
            Total: Number,
            Grade: String,
        },
    ],
});

stdSchema.methods.joivalidate = (data) =>{
    var Joi = require('joi');
    var schema = Joi.object({
        _id: Joi.number().required(),
        Name: Joi.string().required(),
        Address: Joi.string().required(),
        Fees: Joi.array() ,
        Result : Joi.array() 
    });
    return schema.validate(data);
}

const StdModel = mongoose.model("student", stdSchema);

module.exports = StdModel;