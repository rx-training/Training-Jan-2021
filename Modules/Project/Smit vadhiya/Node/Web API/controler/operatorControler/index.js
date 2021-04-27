const express = require('express')
const router = express.Router()

const operatore = require('./operatores') 

router.use('/:id',operatore) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router