const express = require('express');
const jwt = require('jsonwebtoken');

const controllers = require('./controllers/index');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', controllers);

app.listen(port, () => {
    console.log(`App started on port ${port}...`);
});