const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
global.config = require('./config');

var students = require('./students.json');

const veriyfytoken = require('./verify');

const app = express();
const port = 3000;

app.use(express.json());


//LOGIN WITH TOKEN
app.post('/login', function (req, res, next) {
    
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };

    //Go to server for user varificarion
    if (userdata.username == "admin" && userdata.password == "admin") {

        let token = jwt.sign(userdata, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '5m'
        });

        res.status(200).json({
            message: 'Login Successful',
            jwtoken: token
        });
    }
    else {
        res.status(401).json({
            message: 'Login Failed'
        });
    }
});


// Assignment1: GET ALL STUDENTS (Url: http://localhost:3000/students)
app.get('/students', veriyfytoken, (req, res) => {
    res.json(students);
});


// Assignment2: GET STUDENTS DETAILS USING ID (Url: http://localhost:3000/students/1)
app.get('/students/:studentId', veriyfytoken, (req, res) => {

    const studentId = req.params.studentId;

    var found = false;

    students.forEach((student) => {
        if(student.ID == studentId){
            found = true;
            res.json(student);
            return;
        }
    });

    if(!found){
        res.status(404).send('Student not found.');
    }
    
});


// Assignment3: GET PARTICULAR STUDENT FEES RECORD (Url: http://localhost:3000/students/1/fees)
app.get('/students/:studentId/fees', veriyfytoken, (req, res) => {
    const studentId = req.params.studentId;

    var found = false;

    students.forEach((student) => {
        if(student.ID == studentId){
            found = true;
            res.json(student.Fees);
            return;
        }
    });

    if(!found){
        res.status(404).send('Student not found.');
    }

});


// Assignment4: GET PARTICULAR STUDENT RESULT RECORD (Url: http://localhost:3000/students/1/result)
app.get('/students/:studentId/result', veriyfytoken, (req, res) => {
    const studentId = req.params.studentId;

    var found = false;

    students.forEach((student) => {
        if(student.ID == studentId){
            found = true;
            res.json(student.Result);
            return;
        }
    });

    if(!found){
        res.status(404).send('Student not found.');
    }

});


// Assignment5: UPDATE RESULT OF STUDENT (Url: Url: http://localhost:3000/students/1/result), (body: { "Eng": 75})
app.put('/students/:studentId/result', veriyfytoken, (req, res) => {
    const studentId = req.params.studentId;

    var found = false;

    const marks = req.body;
    
    students.forEach((student) => {
        if(student.ID == studentId){
            found = true;
            for(sub in marks){
                student.Result[sub] = marks[sub];
            }
            
            fs.writeFile('./students.json', JSON.stringify(students), (err) => {
                if(err){
                    console.error(err);
                    return;
                }
                
            })

            res.json(students);
            return;
        }
    });

    if(!found){
        res.status(404).send('Student not found.');
    }

});

app.listen(port, () => {
    console.log(`Application started on port ${port}...`);
});