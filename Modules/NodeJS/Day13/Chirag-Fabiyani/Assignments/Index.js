const express = require('express');
const app = express();
const Doctor = require('./Doctor');
const Patient = require('./Patient');

app.use('/doctor',Doctor);
app.use('/patient',Patient);

app.listen(3000);