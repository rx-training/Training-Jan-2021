var jwt = require('jsonwebtoken') 
const Collections = require('../../models/index')

const Encdec = require('../../domain/passwordDomain')

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
            var hash = Encdec.encPassword(decoded.password)

            const userData = await Collections.Users.find({ email : decoded.email, password : hash})
            if(userData.length == 0) return res.send("login please")
            const url = req.url.split('/')
            const userId = parseInt(url[1])
            if((userData[0]._id) == userId){
                req.decoded = decoded;
                console.log(decoded);
                next();
            } else {
            return res.status(401).json({ message: 'Please login'});
            }
        
         })
}
module.exports = verify