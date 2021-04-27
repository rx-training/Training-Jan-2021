var express = require('express');
 global.config = require('../../../static/config')
const Collections = require('../../../models/index')
var router = express.Router();
var jwt = require('jsonwebtoken')

router.post('/login', async (req,res) => {
    const operatordata = {
        email : req.body.email,
        password :req.body.password
    }
    const operator = await Collections.Operators.find({email : operatordata.email})
    if(operator.length == 0) return res.status(404).send("emailId not found")
    const actualData = {
        userEmail : operator[0].email,
        userPassword : operator[0].password
    }

    let token = jwt.sign(operatordata, global.config.secretKey, {
          algorithm: global.config.algorithm,
          expiresIn: '5m'
          });
    
    if(operatordata.email == actualData.userEmail && operatordata.password == actualData.userPassword){
        res.status(200).send(token)
    } else {
        res.status(401).send("Login faild!! Wrong Password")
    }
})

module.exports = router;
