const express = require('express');
const router = express.Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const departmentRouter = require('../controllers/departments/departments');
const doctorRouter = require('../controllers/doctors/doctors');
const healthcareAssistantRouter = require('../controllers/healthcare_assistant/healthcare_assistant');
const patientRouter = require('../controllers/patients/patients');
const prescriptionRouter = require('../controllers/prescriptions/prescriptions');

router.use('/departments', departmentRouter);
router.use('/doctors', doctorRouter);
router.use('/healthcareAssistants', healthcareAssistantRouter);
router.use('/patients', patientRouter);
router.use('/prescriptions', prescriptionRouter);

module.exports = router;