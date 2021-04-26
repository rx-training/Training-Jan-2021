const express = require('express')
const app = express()
global.employees = require('./myJson/employees.json')
global.assignments = require('./myJson/assignments.json')

const allApis = require('./controler/index')

app.use(express.json())
app.listen(3000,() => { console.log("3000 is listening......"); })

app.get("/", (req,res) => res.send("it's home page buddy :) "))

app.use('/',allApis)