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
                return res.status(401).json({
                        message: 'Unauthorized Access'
                 });
            } 
                 const operatorData = await Collections.Operators.find({ email : decoded.email, password : decoded.password})
                 const operatorId = parseInt(req.url[1])
                 if((operatorData[0]._id) == operatorId){
                     req.decoded = decoded;
                     next();
                 } else {
                    return res.status(401).json({
                                        message: 'Please login'
                                 });
                 }
        
         })
}
module.exports = verify