const express = require('express');
const app = express();
const Controllers = require('./Controllers/Index');

app.use('/olx',Controllers);

app.listen(3000);