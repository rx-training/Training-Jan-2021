const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    math : Number,
    sci : Number,
    Eng : Number,
    Guj : Number
});



module.exports = resultSchema;
