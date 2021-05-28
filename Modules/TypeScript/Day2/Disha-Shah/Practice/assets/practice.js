var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//----------------------------------Class---------------------------------------------------------
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return this.empName + " has Salary = 10000";
    };
    return Employee;
}());
// creating object
var employee = new Employee(12, "John Smith");
document.getElementById("app").innerHTML = employee.getSalary() + " <br>";
// inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// inherited by two classes
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal1));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// private
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal2));
var Employee1 = /** @class */ (function () {
    function Employee1(theName) {
        this.name = theName;
    }
    return Employee1;
}());
var animal = new Animal2("Goat");
var rhino = new Rhino();
var employee1 = new Employee1("Bob");
animal = rhino;
//animal = employee1;    //error(not accessible)
// protected
// @errors: 2445
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);    //error(not accessible)
// protected constructor
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
// Employee can extend Person
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee3;
}(Person1));
var howard1 = new Employee3("Howard", "Sales");
//let john = new Person1("John");   //error(not accessible)
// readonly
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";   // error(can't modify)
console.log(dad.name);
// Accessors
var fullNameMaxLength = 10;
var Employee4 = /** @class */ (function () {
    function Employee4() {
        this._fullName = "";
    }
    Object.defineProperty(Employee4.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee4;
}());
var employee2 = new Employee4();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}
// Static
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// use class as an interface
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
//----------------------------------------------Tuple------------------------------------------------------------------
// Declare a Tuple
var a;
// Initialize it
a = ["hi", 8]; // Ok
console.log(a);
document.getElementById("app").innerHTML += a + " <br>";
var employees1;
employees1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employees1);
document.getElementById("app").innerHTML += employees1 + " <br>";
//------------------------------------------------Union------------------------------------------------------------------
// Union Example
var emp1;
emp1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(emp1);
var code;
code = 123;
console.log(code);
code = "ABC";
console.log(code);
// code = false; // compilation error
// passing union type in function parameter
function display(value) {
    if (typeof (value) === "number") {
        console.log(value + " is a number");
    }
    else if (typeof (value) === "string") {
        console.log(value + " is a string");
    }
}
display(123);
display("ABC");
//----------------------------------------------enum----------------------------------------------------------
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Blue);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log("User : " + recipient + ", Response : " + message);
}
respond("Princess Caroline", UserResponse.Yes);
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.None);
console.log(FileAccess.Read);
console.log(FileAccess.Write);
console.log(FileAccess.ReadWrite);
console.log(FileAccess.G);
// enum as member types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    console.log(obj.X);
}
// Works, since 'E' has a property named 'X' which is a number.
f(E);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
// reverse mappings
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a1 = Enum.A;
var nameOfA = Enum[a1]; // "A"
console.log(nameOfA);
var directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */,
];
console.log(directions);
var ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
0 /* Up */;
//(enum member) EDirection.Up = 0
ODirection.Up;
//(property) Up: 0
// Using the enum as a parameter
function walk(dir) { }
function run(dir) { }
walk(2 /* Left */);
run(ODirection.Right);
var Employee5 = /** @class */ (function () {
    function Employee5(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee5.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee5;
}());
var emp2 = new Employee5(1, "Steve");
console.log(emp2.getSalary(30000));
var kv1 = { key: 1, value: "Steve" };
console.log(kv1);
;
function addKeyValue(key, value) {
    console.log("addKeyValue: key = " + key + ", Value: " + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill');
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);
var empObj1 = {
    empCode: 1,
    empName: "Steve",
    SSN: 100
};
//empObj1.SSN = 200; // error(readonly)
console.log(empObj1);
var a2 = [1, 2, 3, 4];
var ro = a2;
console.log(ro);
//ro[0] = 12; // error!
//Index signature in type 'readonly number[]' only permits reading.
//    ro.push(5); // error!
//Property 'push' does not exist on type 'readonly number[]'.
//    ro.length = 100; // error!
//Cannot assign to 'length' because it is a read - only property.
//    a = ro; // error!
//The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'
a2 = ro;
console.log(a2);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var squareOptions = { colour: "red", width: 100 };
var mySquare1 = createSquare(squareOptions);
var myArray = ["Alice", "Bob"];
console.log(myArray);
var empObj2 = {
    empCode: 1,
    gender: "male",
    name: "Bill"
};
console.log(empObj2);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
console.log(c);
c(10);
console.log(c);
c.reset();
console.log(c);
c.interval = 5.0;
console.log(c);
//---------------------------------------------Functions-----------------------------------------------------
// named function
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
// anonymous function
var sum = function (x, y) {
    return x + y;
};
console.log(sum(4, 5));
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(6, 7));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
console.log(result1);
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1 - 2 arguments, but got 3.
var result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result3);
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result5 = buildName1("Bob"); // works correctly now, returns "Bob Smith"
console.log(result5);
var result6 = buildName1("Bob", undefined); // still works, also returns "Bob Smith"
console.log(result6);
//let result7 = buildName1("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1 - 2 arguments, but got 3.
var result8 = buildName1("Bob", "Adams"); // ah, just right
console.log(result8);
// rest parameters
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
var employeeName5 = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName5);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=practice.js.map