const express = require('express');
const router = express.Router();
const Customers1 = require('./Customer1')

// class Customers{
//     static customerlist1(req,res,next){
//         console.log('1')
//         next();
//     }
//     static customerlist2(req,res,next){
//         console.log('2')
//         next();
//     }
// }

router.use('/customerlist',Customers1);
// router.get('/customerlist/:id',Customers.customerstatus);

module.exports = router;