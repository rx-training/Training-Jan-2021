const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const jwt = require('jsonwebtoken');
global.config = require('../config');

router.get('/' ,(req , res , next)=>{
    res.send(' customer Router is working fine.');
    next();
});


router.use([express.json()],(req , res , next)=>{
    let token = req.headers['x-access-token'];
    console.log(token);


        jwt.verify(token, global.config.secretKey,
            { algorithm: global.config.algorithm},
        (err, decoded) =>{
                if (err) {
                        let errordata = {
                                message: err.message,
                                expiredAt: err.expiredAt
                                };
                        console.log(errordata);
                        return res.status(401).json({
                        message: 'Unauthorized Access'});
                        }
            req.decoded = decoded;
            console.log(decoded);
            next();
            }
        ); 
});


router.get('/all' , (req , res , next)=>{
    let customerdata = [
        {
        customerid: 1,
        customername: 'Mahfuz Bappy'
        },
        {
        customerid: 2,
        customername: 'Shamim Uddin'
        },
        {
        customerid: 3,
        customername: 'Ishani Isha'
        }
        ];
        
    
    res.json(customerdata);
    next();
});
   


module.exports = router;