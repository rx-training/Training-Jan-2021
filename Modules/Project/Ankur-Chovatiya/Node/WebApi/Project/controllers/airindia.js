const express = require('express');
const app = express();
const router = express.Router();
const b2cRouter = require('./B2C/index');


router.get('/' , (req , res , next)=>{
    res.send('AirIndia controller is working fine!');
    next();
});


router.use('/B2C' ,b2cRouter);

module.exports = router ;
