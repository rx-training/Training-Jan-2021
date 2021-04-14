const express = require('express')
const app = express()

const employee = require('./myRoute/employee')
const assignment = require('./myRoute/assignment')

app.listen(3000, () => { console.log("3000 is listening......"); })

app.use('/emps',employee)
app.use('/assignments',assignment)

app.get("/", (req,res) => {
    console.log("it's home page buddy :) ");
})