var express = require('express');
 global.config = require('../../../static/config')
const Collections = require('../../../models/index')
var router = express.Router();
var jwt = require('jsonwebtoken')
const Encdec = require('../../../domain/passwordDomain');

router.post('/login', async (req,res) => {
    const operatordata = {
        email : req.body.email,
        password :req.body.password
    }
    const operator = await Collections.Operators.findOne({email : operatordata.email})
    if(!operator) return res.send("emailId not found")
    
        var myPassword = Encdec.decPassword(operator.password)

    const actualData = {
        userEmail : operator.email,
        userPassword : myPassword
    }

    let token = jwt.sign(operatordata, global.config.secretKey, {
          algorithm: global.config.algorithm,
          expiresIn: '1h'
          });
    
    if(operatordata.email == actualData.userEmail && operatordata.password == actualData.userPassword){
        res.send({
            token : {
                headers : {
                    token : token
                }
            },
            id : operator._id
        })
    } else {
        res.send("Login faild!! Wrong Password")
    }
})

module.exports = router;
