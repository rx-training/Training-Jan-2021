const express = require('express')
const jwt = require('jsonwebtoken')
global.config = require('./config');
const customer = require('./customers.js')
const app = express()

app.use('/customers', customer)
app.use(express.json())

app.listen(3000, () => {
    console.log("3000 is listening....");
})

app.post('/login', (req,res) => {
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