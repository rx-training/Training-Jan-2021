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
var classPractice = /** @class */ (function () {
    function classPractice(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    classPractice.prototype.display = function () {
        return this.id + " | " + this.name + " | " + this.address;
    };
    return classPractice;
}());
var p1 = new classPractice(1, "milit", "rajkot");
var p2 = new classPractice(2, "xyz", "rajkot");
console.log(p1.display());
var arr = [];
arr.push(p1);
arr.push(p2);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var person = arr_1[_i];
    console.log(person.display());
}
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    return Student;
}(classPractice));
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.printName = function () {
        console.log("Hello, " + this.getName());
    };
    return Base;
}());
//   const b = new Base(); // cannot create instance of ab. class
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.getName = function () {
        return "world";
    };
    return Derived;
}(Base));
var d = new Derived();
d.printName();
var Try = /** @class */ (function () {
    function Try() {
    }
    Try.prototype.display = function () {
        console.log(this.x);
    };
    return Try;
}());
var xx = new Try();
xx.x = 1;
xx.display();
