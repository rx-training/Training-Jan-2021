const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    AdId:{
        type: Number,
        unique: true
    },
    Services:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Services'
    }],
    CartTotal:{
        type: Number
    }
});

module.exports = mongoose.model('Transactions',TransactionSchema);