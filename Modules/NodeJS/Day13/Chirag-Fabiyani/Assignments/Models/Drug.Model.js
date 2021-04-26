const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    DrugName: {
        type: String,
        required: true
    },
    Prescriptions:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Drugs',DrugSchema);