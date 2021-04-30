var express = require('express');
 global.config = require('../../../static/config')
const Collections = require('../../../models/index')
var router = express.Router();
var jwt = require('jsonwebtoken')

router.post('/login', async (req,res) => {
    const userdata = {
        username : req.body.userid,
        password :req.body.password
    }
    let token = jwt.sign(userdata, global.config.secretKey, {
          algorithm: global.config.algorithm,
          expiresIn: '5m'
          });
    if(userdata.username == 'admin' && userdata.password == 'admin'){
        res.status(200).send("login succesful  " + token)
    } else {
        res.status(401).send("Login faild ")
    }
})

module.exports = router;
