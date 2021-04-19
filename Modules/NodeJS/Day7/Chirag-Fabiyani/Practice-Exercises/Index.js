const express = require('express');
const app = express();
const customer = require('./Customer');

app.use('/customer',customer);

app.listen(3000);