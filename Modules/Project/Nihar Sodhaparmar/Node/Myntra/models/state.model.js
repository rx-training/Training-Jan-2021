const mongoose = require('mongoose');
const Joi = require('joi');

// model
const State = mongoose.model('states', new mongoose.Schema({
    stateName: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'countries'
    }
}));

// validating using joi
function validateState(state){
    const schema = {
        stateName: Joi.string().required(),
        country: Joi.objectId().required()
    }

    return Joi.validate(state, schema);
}

module.exports.State = State;
module.exports.validateState = validateState;