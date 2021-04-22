const mongoose = require('mongoose');
const Fawn = require('fawn');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const express = require('express');

const port = 3000;
const app = express();

app.use(express.json());

const controllerRouter = require('./controllers/index');

app.use('/', controllerRouter)

const database = 'mongodb://localhost/playground';

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
    console.log('Connected to MongoDB...')
}).catch(err => {
    console.error('Could not connect to MongoDB...', err)
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});