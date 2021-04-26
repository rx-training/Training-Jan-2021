const express = require("express");
const fs = require("fs");
var students = require("./students.json");
let jwt = require("jsonwebtoken");
const config = require("./config");
const veryfytoken = require("./verifytoken");

const app = express();
const port = 3000;
app.use(express.json());
var data = students;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Assignment Day 8 Create a login API, After a successfully log in we can access after that Result API,
 Fees API. */

app.post("/login", function (req, res, next) {
  let userdata = {
    username: req.body.username,
    password: req.body.password,
  };
  //for user varificarion

  let token = jwt.sign(userdata, config.secretKey, {
    algorithm: config.algorithm,
    expiresIn: "5m",
  });

  if (userdata.username == "admin" && userdata.password == "admin") {
    res.status(200).json({
      message: "Login Successful",
      jwtoken: token,
    });
  } else {
    res.status(401).json({
      message: "Login Failed",
    });
  }
});

/* RESTFUL API which will return a Studentlist.
http://localhost:3000/students*/

app.get("/students", veryfytoken, (req, res) => {
  res.json(data);
});

/* RESTFUL API which will return a Particular Student Record
http://localhost:3000/students/1 */
app.get("/students/:studentId", veryfytoken, (req, res) => {
  let id = req.params.studentId;
  //checking if record available
  let a = data.find((d) => d.ID == id);
  if (a) {
    data.forEach((value) => {
      if (id == value.ID) {
        res.json(value);
      }
    });
  } else {
    res.send("Record Not Available");
  }
});

/* RESTFUL API which return a particular student FEES Record. Fees field are 
http://localhost:3000/students/1/fees */

app.get("/students/:studentId/fees", veryfytoken, (req, res) => {
  let id = req.params.studentId;
  //checking if record available
  let a = data.find((d) => d.ID == id);
  if (a) {
    data.forEach((value) => {
      if (id == value.ID) {
        res.json(value.Fees);
      }
    });
  } else {
    res.send("Record Not Available");
  }
});

/* RESTFUL API which will return a particular student Exam Result. Result Fields are 
http://localhost:/3000/students/1/result */

app.get("/students/:studentId/result", veryfytoken, (req, res) => {
  let id = req.params.studentId;
  //checking if record available
  let a = data.find((d) => d.ID == id);
  if (a) {
    data.forEach((value) => {
      if (id == value.ID) {
        res.json(value.Result);
      }
    });
  } else {
    res.send("Record Not Available");
  }
});

/* RESTFUL API which will update a result of result of student id 1. Update the marks for 
English Subject. 
http://localhost:/3000/students/1/result/eng */

app.put("/students/:studentId/result/:subject", veryfytoken, (req, res) => {
  let id = req.params.studentId;
  let sub = req.params.subject;
  let marks = req.body.marks;

  //checking if record available
  let a = data.find((d) => d.ID == id);

  //updating record if available
  if (a) {
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].ID) {
        //updating marks for english
        if (sub == "eng") {
          data[i].Result.Eng = marks;
          data[i].Result.Total =
            parseInt(data[i].Result.Eng) +
            parseInt(data[i].Result.Hindi) +
            parseInt(data[i].Result.Math);
          if (data[i].Result.Total > 200) {
            data[i].Result.Grade = "A";
          } else if (
            data[i].Result.Total > 100 &&
            data[i].Result.Total <= 200
          ) {
            data[i].Result.Grade = "B";
          } else {
            data[i].Result.Grade = "C";
          }
          //writing changes in json file
          fs.writeFile(
            "students.json",
            JSON.stringify(data),
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
          data[i].Result.Hindi = marks;
          data[i].Result.Total =
            parseInt(data[i].Result.Eng) +
            parseInt(data[i].Result.Hindi) +
            parseInt(data[i].Result.Math);
          if (data[i].Result.Total > 200) {
            data[i].Result.Grade = "A";
          } else if (value.Result.Total > 100 && value.Result.Total <= 200) {
            data[i].Result.Grade = "B";
          } else {
            data[i].Result.Grade = "C";
          }
          //writing changes in json file
          fs.writeFile(
            "students.json",
            JSON.stringify(data),
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
          data[i].Result.Math = marks;
          data[i].Result.Total =
            parseInt(data[i].Result.Eng) +
            parseInt(data[i].Result.Hindi) +
            parseInt(data[i].Result.Math);
          if (data[i].Result.Total > 200) {
            data[i].Result.Grade = "A";
          } else if (
            data[i].Result.Total > 100 &&
            data[i].Result.Total <= 200
          ) {
            data[i].Result.Grade = "B";
          } else {
            data[i].Result.Grade = "C";
          }
          //writing changes in json file
          fs.writeFile(
            "students.json",
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
});

//listening requests
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
