const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const inquirer = require("inquirer");
const fs = require("fs");
var questions = [
    {
        type: "input",
        name: "name",
        message: "What's your name?",
    },
    {
        type: "confirm",
        name: "ExamStart",
        message: "You Want to Start your Exam",
    },
];

inquirer.prompt(questions).then((answers) => {
    //console.log(`${answers["name"]}`);
    //console.log(`${answers["ExamStart"]}`);
    if (answers["ExamStart"] == true) {
        let MumbaiUniversityExam = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Finish");
            }, 60 * 1000 * 180);
        });

        const fun1 = async () => {
            let result = await MumbaiUniversityExam;
            if (result == "Finish") {
                eventEmitter.emit("end");
            }
        };

        eventEmitter.on("end", () => {
            console.log("Times Up !! Exam Ended " + answers["name"]);
        });

        eventEmitter.on("start", () => {
            console.log("Exam Started");
            fs.readFile("./questions.json", "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(JSON.parse(data));
            });
            fun1();
        });
        eventEmitter.emit("start");
    } else {
        console.log("Try Again !!");
    }
});