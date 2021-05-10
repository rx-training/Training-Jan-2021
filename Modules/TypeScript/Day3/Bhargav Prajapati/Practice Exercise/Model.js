"use strict";
exports.__esModule = true;
var PracticeExercise_1 = require("./PracticeExercise");
var new_1 = require("./new");
console.log("=====================Model Example =======================");
var data = new PracticeExercise_1.StudentInfo();
data.SetValue(3, "Hello Model");
data.GetValue();
var result = PracticeExercise_1.Identity("Identity Method is called");
console.log("String Value Is Printed :- " + result);
var result1 = PracticeExercise_1.Identity(2564);
console.log("Integer Value Is Printed :- " + result1);
var data1 = PracticeExercise_1.DisplayData;
data1(1, "Dhoni");
for (var _i = 0, Empdata_1 = new_1.Empdata; _i < Empdata_1.length; _i++) {
    var iterator = Empdata_1[_i];
    console.log(iterator);
}
