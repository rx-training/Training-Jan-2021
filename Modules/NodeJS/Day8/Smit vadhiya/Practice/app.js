const express = require('express')
const jwt = require('jsonwebtoken')
global.config = require('./static/config');
const app = express()
/* 
const customerApis = require('./controler/customer/index')
const authenticationApi = require('./controler/authentication/index') 
const security = require('./authenticater/secutity')
*/
const allApis = require('./controler/index')


app.use(express.json())
app.use('/', allApis)
/* app.use('/authenticate',authenticationApi)

app.use(security)
app.use('/customers', customerApis)
 */
    app.listen(3000, () => {
    console.log("3000 is listening....");
})
