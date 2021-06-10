const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    ServiceId:{
        type: Number,
        unique: true
    },
    ServiceTitle:{
        type: String
    },
    ServicePrice:{
        type: Number
    }
});

module.exports = mongoose.model('Services',ServiceSchema);