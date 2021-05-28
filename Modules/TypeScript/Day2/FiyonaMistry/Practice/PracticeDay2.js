var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var Trial = /** @class */ (function () {
    // PROP definition
    // private Fname : string;
    // public getFna() : string {
    //     return this.Fname;
    // }
    // public setFna(v : string) {
    //     this.Fname = v;
    // }
    function Trial(fname, lname) {
        // super();       #Can only be referenced in a derived class
        this.Fname = fname;
        this.Lname = lname;
    }
    Trial.prototype.getFullName = function () {
        return this.Fname + " " + this.Lname;
    };
    return Trial;
}());
var trial = new Trial("Fiyona", "Mistry");
// let trial = new Trial("Fiyona", "Mistry");
console.log(trial.getFullName());
// Inheritance
var Testing = /** @class */ (function (_super) {
    __extends(Testing, _super);
    // Also runs without ctor
    function Testing(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    Testing.prototype.getFullName = function () {
        return _super.prototype.getFullName.call(this);
        // return `Full Name : ${this.Fname} ${this.Lname}`;
    };
    return Testing;
}(Trial));
var test = new Testing("Nita", "Mistry");
console.log(test.getFullName());
// Tuple
var a = ["String", 2134]; // Cannot add another elements because only 2 variables are defined. Sequence should be proper
console.log(a[0].substring(3)); // Only applicable on string datatype
// Union
var union;
union = 2345;
union = "2155";
console.log(typeof union);
// Union in Function
var func = function (union) {
    if (typeof union === "string") {
        return "Union is String";
    }
    else {
        return "Union is not a String";
    }
};
console.log(func(union));
// Enum
var val;
(function (val) {
    val[val["v1"] = 1] = "v1";
    val[val["v2"] = 2] = "v2";
    val[val["v3"] = 3] = "v3";
})(val || (val = {}));
;
console.log(val.v1);
console.log(val.v2); // v1 starts from 1 so v2 value is 2
var shape;
(function (shape) {
    shape["Circle"] = "Circle";
    shape["Square"] = "Square";
})(shape || (shape = {}));
;
var circle = { Circle: shape.Circle, radius: 20 };
console.log(circle);
// Reverse Mapping
var e;
(function (e) {
    e[e["A"] = 0] = "A";
})(e || (e = {}));
;
var x = e.A;
var nameOfA = e[x];
console.log(nameOfA);
var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.Fname = fname;
        this.Lname = lname;
    }
    Employee.prototype.getFullName = function () {
        return this.Fname + " " + this.Lname;
    };
    return Employee;
}());
// Interface can also be extended
//let emp : Employee = {Fname : "Divyang", Lname : "Mistry", getFullName()};
var emp = new Employee("Divyang", "Mistry");
console.log(emp.getFullName());
var type = { key: 345, value: "Implementation of Interface as Type" };
console.log(type);
var funct = function (key, value) {
    return key + " " + value;
};
console.log(funct(3254, "Implementation of Inerface as Function"));
var arr = [234, 3456, 2];
console.log(arr);
var st = {
    studentID: 23,
    name: "Abc",
    gender: "Female",
    bloodGroup: "B+"
};
console.log(st);
