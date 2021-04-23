const express = require ('express');

const app = express();
const router = express.Router();
const doctor = require('./doctor');
const assistant = require('./assistant');
const department = require('./department');
const patient = require('./patient');
const medicine = require('./medicine');

router.get('/' , (req , res , next)=>{
    res.send('controller is working fine!');
    next();
});


router.use('/doctor' , doctor);
router.use('/department' , department);
router.use('/assistant' , assistant);
router.use('/patient' , patient);
router.use('/medicine' , medicine);


module.exports = router;

