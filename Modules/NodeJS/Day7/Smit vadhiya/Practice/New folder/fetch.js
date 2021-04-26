
const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())

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
    res.send(courses)
    res.end()
})
