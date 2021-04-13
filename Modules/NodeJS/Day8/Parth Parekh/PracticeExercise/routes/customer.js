const express = require('express');
const router = express.Router();
let verifytoken = require('./verifytoken');

router.get('/data', verifytoken ,(req,res,next)=>{
    let customerData = [{
      customerid :1,
      custoername : 'Parth'  
    },
    {
     customerid : 2,
     customername : 'Parekh'
    }];

    res.json(customerData);
});

module.exports = router;
