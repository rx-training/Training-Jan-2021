"use strict";
exports.__esModule = true;
exports.StudentInfo = exports.display = void 0;
//Generic function
function display(arg) {
    return arg;
}
exports.display = display;
var output1 = display("Welcome");
var output2 = display(100);
console.log(output1);
console.log(output2);
// Generic class
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = " + this.Id + ", Name = " + this.Name);
    };
    return StudentInfo;
}());
exports.StudentInfo = StudentInfo;
var st = new StudentInfo();
st.setValue(101, 'virat');
st.display();
;
function studentData(id, value) {
    console.log("Id = " + id + ", Name = " + value);
}
var std = studentData;
std(11, 'Rohit Sharma');
