const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpSchema = new Schema({
    ID: Number,
    Name: String,
    Address: String,
    Skills: [],
});

module.exports = mongoose.model('EmpObject',EmpSchema);