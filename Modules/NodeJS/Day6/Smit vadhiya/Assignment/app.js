const express = require('express');
const app = express();
global.customer =  require('./jsonFiles/customer.json')
global.students =  require('./jsonFiles/students.json')
const allApis = require('./controler/index')

app.use(express.json());


app.listen(3000, () => console.log('3000 port is listening'))

app.get('/',(req,res) => {
    res.send('welcome to the home page :) \n you cam go for customers or students')
})

app.use('/',allApis)
