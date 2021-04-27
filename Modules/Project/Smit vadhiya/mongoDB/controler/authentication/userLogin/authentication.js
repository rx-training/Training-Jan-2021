var express = require('express');
 global.config = require('../../../static/config')
const Collections = require('../../../models/index')
var router = express.Router();
var jwt = require('jsonwebtoken')

router.post('/login', async (req,res) => {
    const userdata = {
        email : req.body.email,
        password :req.body.password
    }
    const user = await Collections.Users.find({email : userdata.email})
    if(user.length == 0) return res.status(404).send("emailId not found")
    const actualData = {
        userEmail : user[0].email,
        userPassword : user[0].password
    }

    let token = jwt.sign(userdata, global.config.secretKey, {
          algorithm: global.config.algorithm,
          expiresIn: '5m'
          });
    
    if(userdata.email == actualData.userEmail && userdata.password == actualData.userPassword){
        res.status(200).send(token)
    } else {
        res.status(401).send("Login faild!! Wrong Password")
    }
})

module.exports = router;
