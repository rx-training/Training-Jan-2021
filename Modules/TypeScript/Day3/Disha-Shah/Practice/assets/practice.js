"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenNumber = exports.GenericNumber = exports.StudentInfo = void 0;
console.log("----------------------------------------Generics----------------------------------------");
// Generic function
function display(arg) {
    //console.log(arg.length);   // error(.length is not available for Type T, bcoz T can be number also)
    return arg;
}
console.log(display("Welcome"));
console.log(display(100));
console.log(display(true));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity([1, 2, 4]));
console.log(loggingIdentity(["hello", "hi", "heyy"]));
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
st.setValue(101, "Virat");
st.display();
var std = new StudentInfo();
std.setValue("102", "Rohit");
std.display();
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
exports.GenericNumber = GenericNumber;
exports.GenNumber = GenericNumber;
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function studentData(id, value) {
    console.log("Id = " + id + ", \nName = " + value);
}
var Istd = studentData;
Istd(11, "Rohit Sharma");
Istd("12", "Rohit Sharma");
function studentData1(id, value) {
    console.log("Id = " + id + ", \nName = " + value);
}
var Istd1 = studentData1;
Istd1(11, "Rohit Sharma");
var Istd2 = studentData1;
Istd("12", "Rohit Sharma");
function loggingIdentity1(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
console.log(loggingIdentity1({ length: 10, value: 3 }));
var str = "hello";
var len = str.length;
console.log(loggingIdentity1({ length: len, value: str }));
// Using Type parameters in Generic constraints
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a"));
// getProperty(x, "m");
//Modules
console.log();
console.log("------------------------------------------Modules-------------------------------------------");
//# sourceMappingURL=practice.js.map