const express = require('express');
global.config = require('./static/config');
const app = express();
const allApis = require('./controler/index')

//middleware
app.use(express.json());

app.listen(3000, () => console.log('3000 port is listening'))

//calling all apis
app.get('/',(req,res) => res.send('welcome to the home page :)'))

app.use('/', allApis)
