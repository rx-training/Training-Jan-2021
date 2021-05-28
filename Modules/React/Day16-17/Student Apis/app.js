const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const allApis = require('./controller/index.js')
const cors = require('cors')

mongoose.connect('mongodb://localhost/Students',{useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log("Connected to mongoDB........."))
   .catch(err => console.log('could not connect to server .....',err))
   app.use(cors())
   app.use(express.json())
   app.use('/',allApis)
   app.get('/', (req, res) => res.send(''))
   
   
   app.listen(port, () => console.log(`Example app listening on port port!`))