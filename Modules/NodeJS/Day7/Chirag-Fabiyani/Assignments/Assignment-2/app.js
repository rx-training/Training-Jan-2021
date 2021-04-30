const express = require('express');
const app = express();
const Controllers = require('./Controllers/Index.js');


app.use('/',Controllers);

app.listen(3000);