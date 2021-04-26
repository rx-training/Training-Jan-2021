const express = require('express');
const app = express();
const Employee = require('./Employee');

app.listen(3000);

app.use('/emps',Employee);