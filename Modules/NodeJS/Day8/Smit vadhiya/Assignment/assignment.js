const express = require('express');
const fs = require('fs');
const app = express();
var students =  require('./assignmentJSON/students.json')

const tokerVerify =  require('./tokerVerify')
const jwt = require('jsonwebtoken')
global.config = require('./config');

app.use(express.json());

app.listen(3000, () => {
    console.log('3000 port is listening');
})

// 1) Create a RESTFUL API which will return a Studentlist.
//    http://localhost:3000/students

app.get('/students',tokerVerify,(req,res) => {
    res.send(students)
})

// 2) Create RESTFUL API which will return a Particular Student Record
//    http://localhost:3000/students/1
app.get('/students/:id',tokerVerify,(req,res) => {
    const myData = students.find((temp) => temp.ID == req.params.id); 
    if(!myData){
        res.status(404).send("<h1><h1>404 user not found</h1></h1>")
    }
    res.send(myData)
})


// 3) Create a RESTFUL API which return a particular student FEES Record. Fees field are 
//     http://localhost:3000/students/1/fees

app.get('/students/:id/fees',tokerVerify,(req,res) => {
    const myData = students.find((temp) => temp.ID == req.params.id); 
    if(!myData){
        res.status(404).send("<h1><h1>404 user not found</h1></h1>")
    }
    res.send(myData.Fees)
})

// 4) Create a RESTFUL API which will return a particular student Exam Result. Result Fields are 
//    http://localhost:3000/students/1/result

app.get('/students/:id/result',tokerVerify,(req,res) => {
    const myData = students.find((temp) => temp.ID == req.params.id); 
    if(!myData){
        res.status(404).send("<h1><h1>404 user not found</h1></h1>")
    }
    res.send(myData.Result)
})

// 5) Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
//    http://localhost:3000/students/1/:sub


app.put('/students/:id/eng/:marks',tokerVerify,(req,res) => {
    const myData = students.find((temp) => temp.ID == req.params.id); 
    if(!myData){
        res.status(404).send("<h1><h1>404 user not found</h1></h1>")
    }
    const index = students.indexOf(myData)
    students[0].Result.Eng = 80
    fs.writeFile('./assignmentJSON/students.json',JSON.stringify(students), (err) => {
        if(err){
            console.log(err);
        }
    })
})

/////login module
app.post('/login', (req,res) => {
    const userdata = {
        username : req.body.userid,
        password :req.body.password
    }
    let token = jwt.sign(userdata, global.config.secretKey, {
          algorithm: global.config.algorithm,
          expiresIn: '5m'
          });
        
        
    if(userdata.username == 'admin' && userdata.password == 'admin'){
        res.status(200).send("login succesful  " + token)
    } else {
        res.status(401).send("Login faild ")
    }
})