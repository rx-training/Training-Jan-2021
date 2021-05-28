const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');

app.use(express.json());

router.use([express.json()],(req , res , next)=>{
    // console.log(req.body);
    // console.log(req.headers);

    let token = req.headers['x-access-token'];
    console.log(token);

    if(!token) res.status(401).send('Access denied. No token provided');

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


module.exports = router;