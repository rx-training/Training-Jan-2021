var studentsArray = require('../json/students.json');
const fs = require('fs');

class StudentDomain {

    //GET ALL STUDENTS
    getAllStudents(req, res) {
        res.json(studentsArray);
    }

    //GET SPECIFIC STUDENT WITH ID
    getStudentById(req, res) {
        const studentId = req.params.studentId;

        var found = false;

        studentsArray.forEach((student) => {
            if (student.ID == studentId) {
                found = true;
                res.json(student);
                return;
            }
        });

        if (!found) {
            res.status(404).send('Student not found.');
        }
    }

    //ADD STUDENT
    addStudent(req, res) {

        const student = req.body;

        let newStudent = {
            "ID": studentsArray.length + 1,
            "Name": student.Name,
            "Address": student.Address
        }

        studentsArray.push(newStudent);

        fs.writeFile('./json/students.json', JSON.stringify(studentsArray), (err) => {
            if (err) {
                res.status(400).send(err);
                return;
            }
            else {
                res.send('Student added successfully');
            }
        })
    }

    //DELETE STUDENT
    deleteStudent(req, res) {

        const studentId = req.params.studentId;

        if (studentId < studentsArray.length || studentId > studentsArray.length) {
            res.status(404).send("Student Not Found");
        }
        else {
            studentsArray.splice(studentId - 1, 1);
            fs.writeFile('./json/students.json', JSON.stringify(studentsArray), (err) => {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                else {
                    res.send('Student deleted successfully');
                }
            })

        }
    }

    //GET FEES
    getFees(req, res) {
        const studentId = req.params.studentId;

        var found = false;

        studentsArray.forEach((student) => {
            if (student.ID == studentId) {
                found = true;
                res.json(student.Fees);
                return;
            }
        });

        if (!found) {
            res.status(404).send('Student not found.');
        }
    }

    //GET RESULT
    getResult(req, res) {
        const studentId = req.params.studentId;

        var found = false;

        studentsArray.forEach((student) => {
            if (student.ID == studentId) {
                found = true;
                res.json(student.Result);
                return;
            }
        });

        if (!found) {
            res.status(404).send('Student not found.');
        }
    }

    //UPDATE RESULT
    updateResult(req, res) {
        const studentId = req.params.studentId;

        var found = false;

        const marks = req.body;

        studentsArray.forEach((student) => {
            if (student.ID == studentId) {
                found = true;
                var total = 0;

                for (let sub in marks) {
                    student.Result[sub] = marks[sub];
                }

                for (let sub in student.Result) {

                    if (sub != "Total" && sub != "Grade") {
                        total += student.Result[sub];
                    }

                }

                student.Result.Total = total;
                total = total / 3;

                if(total > 90){
                    student.Result.Grade = "A";
                }
                else if(total > 80){
                    student.Result.Grade = "AB";
                }
                else if(total > 70){
                    student.Result.Grade = "B";
                }
                else if(total > 60){
                    student.Result.Grade = "BB";
                }
                else if(total > 50){
                    student.Result.Grade = "C";
                }
                else if(total > 40){
                    student.Result.Grade = "BC";
                }
                else{
                    student.Result.Grade = "F";
                }

                fs.writeFile('./json/students.json', JSON.stringify(studentsArray), (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    else{
                        res.json("Student Result Updated Successfully");
                    }

                });

                
            }
        });

        if (!found) {
            res.status(404).send('Student not found.');
        }
    }
}

module.exports = StudentDomain;