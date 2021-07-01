const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')

// files
const logger = require('./middlewares/logger')
const generateToken = require('./modules/Auth/generateToken')       // authentication
const verifyToken = require('./modules/Auth/verifyToken')           // authorization
const mainroutes = require('./routes/v2/main.routes')

// variables
const hostname = 'localhost'
const port = process.env.PORT || 80





// connecting to mongoose
mongoose.connect('mongodb://localhost:27017/Carwale', 
  { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true},
  (err) => {
    if(err) throw err
    console.log('Connected to Mongo🐒')
  })


// middlewares
app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/login', generateToken)

// routes
app.use('/', mainroutes)



app.listen(port, () => console.log(`app listening at http://${hostname}:${port}`) )



















