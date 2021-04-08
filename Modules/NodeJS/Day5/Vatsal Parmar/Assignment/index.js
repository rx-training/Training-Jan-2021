const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const inquirer = require("inquirer");
const fs = require("fs");

var examTime = 3; //in hrs

// creating exam promise
var exam = new Promise((reslve, reject) => {
  setTimeout(() => {
    reslve("Finished");
  }, examTime * 60 * 60 * 1000);
});

//registering end event
eventEmitter.on("end", () => {
  console.log("Exam Ended");
});

// registering start event
eventEmitter.on("start", () => {
  // ending exam when time is over
  console.log("Exam Started");
  exam.then((value) => {
    if (value == "Finished") {
      // calling end event
      eventEmitter.emit("end");
    }
  });

  //printing questions
  fs.readFile("question.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let que = JSON.parse(data);
      que.forEach((value) => {
        console.log(value);
      });
    }
  });
});

var questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
  {
    type: "input",
    name: "rollno",
    message: "Enter Roll No : ",
  },
  {
    type: "confirm",
    name: "start",
    message: "Do you want to start the exam ?",
  },
];

// Getting user input
inquirer.prompt(questions).then((answers) => {
  let name = answers["name"];
  let rollNo = answers["rollno"];
  let start = answers["start"];
  if (start === true) {
    console.log("Name : " + name);
    console.log("Roll No : " + rollNo);

    // calling start event
    eventEmitter.emit("start");
  } else {
    console.log("Exam Ended");
  }
});
