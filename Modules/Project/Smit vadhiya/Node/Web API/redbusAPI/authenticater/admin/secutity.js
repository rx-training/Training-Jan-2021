var jwt = require('jsonwebtoken') 
const Collections = require('../../models/index')
const config = require('../../static/config') 

function  verify(req,res,next){
    var token = req.headers["token"]    
    jwt.verify(token, global.config.secretKey,
         {
            algorithm: global.config.algorithm
         }, 
        async function (err, decoded) {
            if (err) {
                let errordata = {
                     message: err.message,
                     expiredAt: err.expiredAt
                };
                console.log(errordata);
                return res.send('Unauthorized Access');
            } 
            req.decoded = decoded;
            next();
         })
}
module.exports = verify