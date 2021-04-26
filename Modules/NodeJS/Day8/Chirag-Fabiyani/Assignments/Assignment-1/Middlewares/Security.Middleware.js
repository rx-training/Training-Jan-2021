global.config = require('../Config');
const jwt = require('jsonwebtoken')

const security = (req,res,next) => {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    })
}

module.exports = security;