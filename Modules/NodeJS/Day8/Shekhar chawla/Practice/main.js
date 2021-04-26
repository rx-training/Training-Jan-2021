const express = require('express')
const app = express()
const bp = require('body-parser')

const users = require('./users')
const customers = require('./customers')

app.use(bp.json())
app.listen(3000, () => console.log('Listening on 3000...'))

app.use('/users', users)
app.use('/customers', customers)
