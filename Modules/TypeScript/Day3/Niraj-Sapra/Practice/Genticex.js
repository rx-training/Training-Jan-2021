"use strict";
exports.__esModule = true;
function display(age) {
    return age;
}
var out1 = display("Welcome");
var out2 = display(100);
console.log(out1);
console.log(out2);
;
function studentData(id, value) {
    console.log('ID = ' + id + '\nName = ' + value);
}
;
var std = studentData;
std(11, "Niraj Sapra");
// Create Modules
//perticuler module
var book_1 = require("./book");
var notes = new book_1.book(2, "priya");
notes.bookdisplay();
//Entire modules 
var Emp = require("./book");
Emp.addToZ(25, 10);
//Remaining
var book_2 = require("./book");
var add = new book_2.book(2, "kemi");
add.bookdisplay();
