const express = require('express');
const app = express();
const router = express.Router();
const bookingRouter = require('./Booking/index');
const userRouter = require('./User/index');


router.get('/',(req , res , next)=>{
    res.send("B2C controller is working fine!"); 
    next();
});

router.use('/Booking' , bookingRouter);
router.use('/user' , userRouter);

module.exports = router;