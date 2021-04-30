const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {

    const database = 'mongodb://localhost/MyntraDB';

    mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        winston.info('MongoDB connected...');
        console.log('MongoDB connected...');
    });
}