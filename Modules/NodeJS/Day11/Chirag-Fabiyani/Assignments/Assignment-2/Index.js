const express = require('express');
const app = express();
const Employees = require('./Employees')

app.use('/emps',Employees);

app.listen(3000);