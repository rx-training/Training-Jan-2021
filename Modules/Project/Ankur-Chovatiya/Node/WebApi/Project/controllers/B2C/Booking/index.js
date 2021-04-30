const express = require('express');
const app = express();
const router = express.Router();
const paymentRouter = require('./Payment/index');
const searchRouter = require('./search');
const selectRouter = require('./select');
const detailsRouter = require('./details');
const seatMapRouter = require('./seatMap');


// router.get('/',(req , res , next)=>{
//     res.send("booking controller is working fine!"); 
// });

router.use('/payment' , paymentRouter);
router.use('/search' , searchRouter);
router.use('/select' , selectRouter);
router.use('/details' , detailsRouter);
router.use('/seatMap' , seatMapRouter);

module.exports = router;