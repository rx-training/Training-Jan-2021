const express = require('express');

const router = express.Router();
const feesRouter = require('./Fees/fees');
const resultrouter = require('./Result/result');

router.get('/', (req , res , next)=>{
    res.send('Student router is working fine!');
    next();
});

router.use('/:id/fees' , feesRouter);
router.use('/:id/result', resultrouter);



module.exports = router;