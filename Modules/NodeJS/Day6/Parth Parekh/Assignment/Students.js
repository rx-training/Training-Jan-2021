const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const student = require("./Students.json");
app.use(express.json());

//1. Create a RESTFUL API which will return a Studentlist.
app.get("/students", (req, res) => {
    res.json(student);
});

// 2. Create RESTFUL API which will return a Particular Student Record
// http://localhost:3000/students/1
app.get("/students/:id", (req, res) => {
    var studentsID = req.params.id;
    
    for (let i = 0; i < student.length; i++) {
        if (student[i].ID == studentsID) {
            res.send(student[i]);

        }
    }
});

// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are 
// http://localhost:3000/students/1/fees

app.get("/students/:id/fees", (req, res) => {
    var studentsID = req.params.id;

    for (let i = 0; i < student.length; i++) {
        if (student[i].ID == studentsID) {
            console.log(student[i].Fees);
            res.send(student[i].Fees);
        }
    }
});

// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are
//  http://localhost:/3000/students/1/result
app.get("/students/:id/result", (req, res) => {
    var studentsID = req.params.id;

    for (let i = 0; i < student.length; i++) {
        if (student[i].ID == studentsID) {
            console.log(student[i].Result);
            res.send(student[i].Result);
        }
    }
});

//5. Create a RESTFUL API which will update a result of  student id 1.
// Update the marks for English Subject.
app.put("/students/:id/result", (req, res) => {
    var studentsID = req.params.id;
    var updateData = req.body;
    for (let i = 0; i < student.length; i++) {
        if (student[i].ID == studentsID) {
            student[i].Result.Eng = updateData.Eng;
            // console.log('sender Eng :'+updateData.Eng);
            // console.log( 'file :' +student[i].Result.Eng); 
            student[i].Result.Total =
                student[i].Result.Hindi +
                student[i].Result.Eng +
                student[i].Result.Math;
            if( student[i].Result.Eng < 23 )
            {
                student[i].Result.Grade = 'F';
            }
        }
    }
    fs.writeFile("Students.json", JSON.stringify(student), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Data Updated Successfully");
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

