const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const logger = require('./customeMW/logger')
const auth = require('./customeMW/authenticate')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.use(helmet())
app.use(morgan("default"))

app.use(logger)

app.use(auth)    


const courses = [
    { id : 1, name : 'course1'},
    { id : 2, name : 'course2'},
    { id : 3, name : 'course3'},
] 

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

app.get('/', (req,res) => {
    res.send('Hello world')
    res.end()
})

app.get('/api/courses', (req,res) => {
    res.send([1,2,3])
})

app.get('/api/courses/:id', (req,res) => {
    const myData = courses.find((c) => c.id == req.params.id)
    if(!myData) return res.status(404).send("Course id not found")
    res.send(myData)
})


app.post('/api/courses', (req,res) => {
    const newData = {
        id : courses.length + 1 ,
        name : req.body.name
    }
    courses.push(newData)
    res.send(newData);
})

app.put('/api/courses/:id', (req,res) => {
    const myData = courses.find((c) => c.id == req.params.id)
    if(!myData) return res.status(404).send("Course id not found")
    myData.name = req.body.name
    res.send(myData);
})

app.delete('/api/courses/:id', (req,res) => {
    const myData = courses.find((c) => c.id == req.params.id)
    if(!myData) return res.status(404).send("Course id not found")
    const index = courses.indexOf(myData)
    courses.splice(index,1)
    res.send(myData);
    console.log(courses);
})

