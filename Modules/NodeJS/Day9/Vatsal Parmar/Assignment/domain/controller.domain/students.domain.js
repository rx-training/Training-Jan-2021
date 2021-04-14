const fs = require("fs");
var students = require("../../json/students.json");
class StudentDomain {
  //To get all students
  getAllStudents(req, res) {
    res.json(students);
  }
  //To return a Particular Student Record
  getStudentRecord(req, res) {
    let id = req.params.studentId;
    //checking if record available
    let a = students.find((d) => d.ID == id);
    if (a) {
      students.forEach((value) => {
        if (id == value.ID) {
          res.json(value);
        }
      });
    } else {
      res.send("Record Not Available");
    }
  }
  //To return a particular student FEES Record
  getFees(req, res) {
    let id = req.params.studentId;
    //checking if record available
    let a = students.find((d) => d.ID == id);
    if (a) {
      students.forEach((value) => {
        if (id == value.ID) {
          res.json(value.Fees);
        }
      });
    } else {
      res.send("Record Not Available");
    }
  }
  //To return a particular student Exam Result
  getResult(req, res) {
    let id = req.params.studentId;
    //checking if record available
    let a = students.find((d) => d.ID == id);
    if (a) {
      students.forEach((value) => {
        if (id == value.ID) {
          res.json(value.Result);
        }
      });
    } else {
      res.send("Record Not Available");
    }
  }
  //To update a result of student
  updateResult(req, res) {
    let id = req.params.studentId;
    let sub = req.params.subject;
    let marks = req.body.marks;

    //checking if record available
    let a = students.find((d) => d.ID == id);

    //updating record if available
    if (a) {
      for (let i = 0; i < students.length; i++) {
        if (id == students[i].ID) {
          //updating marks for english
          if (sub == "eng") {
            students[i].Result.Eng = marks;
            students[i].Result.Total =
              parseInt(students[i].Result.Eng) +
              parseInt(students[i].Result.Hindi) +
              parseInt(students[i].Result.Math);
            if (students[i].Result.Total > 200) {
              students[i].Result.Grade = "A";
            } else if (
              students[i].Result.Total > 100 &&
              students[i].Result.Total <= 200
            ) {
              students[i].Result.Grade = "B";
            } else {
              students[i].Result.Grade = "C";
            }
            //writing changes in json file
            fs.writeFile(
              "./json/students.json",
              JSON.stringify(students),
              { flag: "w" },
              (err) => {
                if (err) {
                  console.log(err);
                  res.end();
                } else {
                  res.json("English Marks Updated");
                }
              }
            );
          } else if (sub == "hindi") {
            // updating marks for hindi
            students[i].Result.Hindi = marks;
            students[i].Result.Total =
              parseInt(students[i].Result.Eng) +
              parseInt(students[i].Result.Hindi) +
              parseInt(students[i].Result.Math);
            if (students[i].Result.Total > 200) {
              students[i].Result.Grade = "A";
            } else if (value.Result.Total > 100 && value.Result.Total <= 200) {
              students[i].Result.Grade = "B";
            } else {
              students[i].Result.Grade = "C";
            }
            //writing changes in json file
            fs.writeFile(
              "./json/students.json",
              JSON.stringify(students),
              { flag: "w" },
              (err) => {
                if (err) {
                  console.log(err);
                  res.end();
                } else {
                  res.json("Hindi Marks Updated");
                }
              }
            );
          } else if (sub == "math") {
            //updating marks for math
            students[i].Result.Math = marks;
            students[i].Result.Total =
              parseInt(students[i].Result.Eng) +
              parseInt(students[i].Result.Hindi) +
              parseInt(students[i].Result.Math);
            if (students[i].Result.Total > 200) {
              students[i].Result.Grade = "A";
            } else if (
              students[i].Result.Total > 100 &&
              students[i].Result.Total <= 200
            ) {
              students[i].Result.Grade = "B";
            } else {
              students[i].Result.Grade = "C";
            }
            //writing changes in json file
            fs.writeFile(
              "./json/students.json",
              JSON.stringify(data),
              { flag: "w" },
              (err) => {
                if (err) {
                  console.log(err);
                  res.end();
                } else {
                  res.json("Math Marks Updated");
                }
              }
            );
          } else {
            res.send("Subject Not Available");
          }
          break;
        }
      }
    } else {
      res.send("Record Not Available");
    }
  }
}

module.exports = StudentDomain;
