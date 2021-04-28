var jwt = require('jsonwebtoken') 
const Collections = require('../../models/index')
const config = require('../../static/config') 
const crypto = require('crypto')

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
                var pass = decoded.password
                var mykey1 = crypto.createCipher("aes-128-cbc", "mypassword");
                var hash = mykey1.update(pass, "utf8", "hex");
                hash += mykey1.final("hex");

                 const userData = await Collections.Users.find({ email : decoded.email, password : hash})
                 if(userData.length == 0) return res.send("login please")
                 const url = req.url.split('/')
                 const userId = parseInt(url[1])
                 if((userData[0]._id) == userId){
                     req.decoded = decoded;
                     console.log(decoded);
                     next();
                 } else {
                    return res.status(401).json({
                                        message: 'Please login'
                                 });
                 }
                //return res.status(403).json({
                 //message: 'Forbidden Access'})
        
         })
}
module.exports = verify