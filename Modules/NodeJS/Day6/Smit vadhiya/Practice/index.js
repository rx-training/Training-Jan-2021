//------- JUST FOR PRACTICE ------

const fs =  require('fs');
const express = require('express');
const http = require("http");
var students = require("./student.json");
var app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("hello")
})
app.get('/1',(req,res) => {
    res.send(students);
    const data = req.body
    console.log(data);
    students.push(data)
    fs.writeFile('./student.json',JSON.stringify(students),(err) => {
        if(err){
            console.log(err);
        }
    })
})
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

