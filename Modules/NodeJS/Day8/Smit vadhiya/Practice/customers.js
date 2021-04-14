var express = require('express');
var jwt = require('jsonwebtoken')
const config = require('./config')
const tokerVerify =  require('./tokerVerify')

var router = express.Router();/* 
router.use((req,res,next) => {
    var token = req.headers["x-access-token"]
    
    jwt.verify(token, global.config.secretKey,
         {
            algorithm: global.config.algorithm
         }, 
        function (err, decoded) {
            if (err) {
                let errordata = {
                     message: err.message,
                     expiredAt: err.expiredAt
                };
                console.log(errordata);
                return res.status(401).json({
                        message: 'Unauthorized Access'
                 });
            } 
                req.decoded = decoded;
                console.log(decoded);
            next();
                return res.status(403).json({
                 message: 'Forbidden Access'})
        
         })
}) */

//router.use(tokerVerify)
  /* GET customers listing without protection. */
 router.get('/data',tokerVerify,function (req, res, next) {
    let customerdata = [
    {
    customerid: 1,
    customername: 'Mahfuz Bappy'
    },
    {
    customerid: 2,
    customername: 'Shamim Uddin'
    },
    {
    customerid: 3,
    customername: 'Ishani Isha'
    }
    ];
    
    res.json(customerdata);
    });
 
 module.exports = router;
