const redbusApis = require('./controler/index')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 80

//CONNECT TO MONGODB 
mongoose.connect('mongodb://localhost/redbus',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to mongo /n err : " + err))

app.listen(port, () => console.log(`redbus is listening on port ${port}!`))//START SERVER 

app.use(cors()) //MIDDLEWARE FOR USE OF API 
app.use(express.json()) //MIDDLEWARE FOR REQUEST JSON FROM BODY

app.use('/api',redbusApis)//ALL APIS WILL START FROM redbus.in

//HOME PAGE
app.get('/api', (req, res) => res.send('Welcome to redbus buddy!'))