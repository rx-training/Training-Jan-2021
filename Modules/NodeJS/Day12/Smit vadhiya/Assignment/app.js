const express = require('express');
const mongoose = require('mongoose')
global.config = require('./static/config');
const app = express();
const allApis = require('./controler/index')


mongoose.connect('mongodb://localhost/Students',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to mongoDB........."))
    .catch(err => console.log('could not connect to server .....',err))

//middleware
app.use(express.json());

app.listen(3000, () => console.log('3000 port is listening'))

//calling all apis
app.get('/',(req,res) => res.send('welcome to the home page :)'))

app.use('/', allApis)
