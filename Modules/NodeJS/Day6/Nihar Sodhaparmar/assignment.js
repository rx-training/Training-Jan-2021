const express = require('express');
const fs = require('fs');

var students = require('./students.json');

const app = express();
const port = 3000;

app.use(express.json());

// Assignment1: GET ALL STUDENTS (Url: http://localhost:3000/students)
app.get('/students', (req, res) => {
    res.json(students);
});


// Assignment2: GET STUDENTS DETAILS USING ID (Url: http://localhost:3000/students/1)
app.get('/students/:studentId', (req, res) => {

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
app.get('/students/:studentId/fees', (req, res) => {
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
app.get('/students/:studentId/result', (req, res) => {
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
app.put('/students/:studentId/result', (req, res) => {
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