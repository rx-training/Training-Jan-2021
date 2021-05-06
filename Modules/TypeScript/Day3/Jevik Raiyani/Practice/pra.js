"use strict";
exports.__esModule = true;
function display(agr) {
    return agr;
}
var x = display(123);
var y = display("dasd");
console.log(x);
console.log(y);
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id  =" + this.Id + " , Name =  " + this.Name);
    };
    return StudentInfo;
}());
var p = new StudentInfo();
p.setValue(1, "jevikk");
p.display();
var q = new StudentInfo();
q.setValue("213", "jevik");
q.display();
;
function StudentData(id, value) {
    console.log("id is " + id + " value is " + value);
}
var std = StudentData;
std(1, "jevik");
function new11(arg) {
    console.log(arg.length);
    return arg;
}
var n1 = new11([1, 2, 3]);
console.log(n1);
var n2 = new11(["jeivk", "Raiyani"]);
console.log(n2);
// class BeeKeeper {
//     hasMask: boolean;
//   }
//   class ZooKeeper {
//     nametag: string;
//   }
//   class Animal {
//     numLegs: number;
//   }
//   class Bee extends Animal {
//     keeper: BeeKeeper;
//   }
//   class Lion extends Animal {
//     keeper: ZooKeeper;
//   }
//   function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
//   }
//   createInstance(Lion).keeper.nametag;
//   createInstance(Bee).keeper.hasMask;
//module
var Module_1 = require("./Module");
var p1 = Module_1.Emp(2, "jeivk");
var Module_2 = require("./Module");
var newStudent = new Module_2.StudentData(1, "Jevik");
newStudent.Display();
var newStudent2 = new Module_2.StudentData(2, "aasd");
newStudent2.Display();
var AllModule = require("./module");
AllModule.Emp(4, "aa");
new AllModule.StudentData(1, "aa").Display();
