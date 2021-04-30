const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

app.use(express.json());

const controllerRouter = require('./controllers/index');
app.use('/', controllerRouter);

const server = app.listen(port, () => {
    winston.info(`App listening on port ${port}...`);
    console.log(`App listening on port ${port}...`);
});

module.exports = server;