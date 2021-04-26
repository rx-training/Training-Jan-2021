const express = require('express');
const router = express.Router();
const Doctor = require('./Doctor.Controller');
const Patient = require('./Patient.Controller');
const Drug = require('./Drug.Controller');
const Assistant = require('./Assistant.Controller');
const Department = require('./Department.Controller');

app.use('/doctor',Doctor);
app.use('/patient',Patient);
app.use('/drug',Drug);
app.use('/assistant',Assistant);
app.use('/department',Department);

module.exports = router;