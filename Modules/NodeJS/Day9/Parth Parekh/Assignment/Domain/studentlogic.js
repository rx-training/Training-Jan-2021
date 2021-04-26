const student = require("../Json/student.json");
const fs = require("fs");

class StudentData {
    //Get All student Details
    getAllStudentData(req, res) {
        res.json(student);
    }

    //Particular Student Record From Id
    getStudentDataFromId(req, res) {
        const array = student.find((c) => c.ID == req.params.id);
        //console.log(array);
        if (!array) {
            res.send(`Student Not Found for Id : ${req.params.id}`);
        } else res.send(array);
    }

    // get Fees Details From StudentId
    getFeesDetailsFromStudentId(req, res) {
        const array = student.find((c) => c.ID == req.params.id);
        //console.log(array);
        if (!array) {
            res.send(`Student Not Found for Id : ${req.params.id}`);
        } else res.send(array.Fees);
    }

    // get Result Details From StudentId
    getResultDetailsFromStudentId(req, res) {
        const array = student.find((c) => c.ID == req.params.id);
        //console.log(array);
        if (!array) {
            res.send(`Student Not Found for Id : ${req.params.id}`);
        } else res.send(array.Result);
    }

    // Update Result For Particular StudentId
    updateEngResult (req,res){
        const array = student.find((c) => c.ID == req.params.id);
        var updateData = req.body;
        //console.log(array);
        if (!array) {
            res.send(`Student Not Found for Id : ${req.params.id}`);
        } else {
            for (let i = 0; i < student.length; i++) {
                if (student[i].ID == req.params.id) {
                    student[i].Result.Eng = updateData.Eng;
                    // console.log('sender Eng :'+updateData.Eng);
                    // console.log( 'file :' +student[i].Result.Eng);
                    student[i].Result.Total =
                        student[i].Result.Hindi +
                        student[i].Result.Eng +
                        student[i].Result.Math;
                    if (student[i].Result.Eng < 23) {
                        student[i].Result.Grade = "F";
                    }
                }
            }
            fs.writeFile("./Json/student.json", JSON.stringify(student), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Data Updated Successfully");
                }
            });
        }
    }
}
module.exports = StudentData;
