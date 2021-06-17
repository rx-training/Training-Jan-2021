const express = require('express');
const app = express();
const Controllers = require('./Controllers/Index');
const cors = require('cors')

app.use(cors());

app.use('/',Controllers);

app.listen(3004);