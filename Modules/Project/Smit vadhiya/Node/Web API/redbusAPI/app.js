const redbusApis = require('./controler/index')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

//CONNECT TO MONGODB 
mongoose.connect('mongodb://localhost/redbus',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to mongo /n err : " + err))

//START SERVER 
app.listen(port, () => console.log(`redbus is listening on port ${port}!`))

app.use(cors())
//MIDDLEWARE FOR REQUEST JSON FROM BODY
app.use(express.json())

//ALL APIS WILL START FROM redbus.in
app.use('/api',redbusApis)

//HOME PAGE
app.get('/api', (req, res) => res.send('Welcome to redbus buddy!'))