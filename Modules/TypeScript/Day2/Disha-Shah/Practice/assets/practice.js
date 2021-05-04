//----------------------------------Class---------------------------------------------------------
class Employee {
    constructor(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    getSalary() {
        return `${this.empName} has Salary = 10000`;
    }
}
// creating object
let employee = new Employee(12, "John Smith");
document.getElementById("app").innerHTML = `${employee.getSalary()} <br>`;
// inheritance
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// inherited by two classes
class Animal1 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal1 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal1 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// private
class Animal2 {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends Animal2 {
    constructor() {
        super("Rhino");
    }
}
class Employee1 {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee1 = new Employee1("Bob");
animal = rhino;
//animal = employee1;    //error(not accessible)
// protected
// @errors: 2445
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee2 extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);    //error(not accessible)
// protected constructor
class Person1 {
    constructor(theName) {
        this.name = theName;
    }
}
// Employee can extend Person
class Employee3 extends Person1 {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard1 = new Employee3("Howard", "Sales");
//let john = new Person1("John");   //error(not accessible)
// readonly
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";   // error(can't modify)
console.log(dad.name);
// Accessors
const fullNameMaxLength = 10;
class Employee4 {
    constructor() {
        this._fullName = "";
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}
let employee2 = new Employee4();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}
// Static
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// use class as an interface
class Point {
}
let point3d = { x: 1, y: 2, z: 3 };
//----------------------------------------------Tuple------------------------------------------------------------------
// Declare a Tuple
let a;
// Initialize it
a = ["hi", 8]; // Ok
console.log(a);
document.getElementById("app").innerHTML += `${a} <br>`;
var employees1;
employees1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employees1);
document.getElementById("app").innerHTML += `${employees1} <br>`;
//------------------------------------------------Union------------------------------------------------------------------
// Union Example
var emp1;
emp1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(emp1);
let code;
code = 123;
console.log(code);
code = "ABC";
console.log(code);
// code = false; // compilation error
// passing union type in function parameter
function display(value) {
    if (typeof (value) === "number") {
        console.log(`${value} is a number`);
    }
    else if (typeof (value) === "string") {
        console.log(`${value} is a string`);
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
    console.log(`User : ${recipient}, Response : ${message}`);
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
    const num = LogLevel[key];
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
let a1 = Enum.A;
let nameOfA = Enum[a1]; // "A"
console.log(nameOfA);
let directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */,
];
console.log(directions);
const ODirection = {
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
class Employee5 {
    constructor(code, name) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode) {
        return 20000;
    }
}
let emp2 = new Employee5(1, "Steve");
console.log(emp2.getSalary(30000));
let kv1 = { key: 1, value: "Steve" };
console.log(kv1);
;
function addKeyValue(key, value) {
    console.log(`addKeyValue: key = ${key}, Value: ${value}`);
}
let kvp = addKeyValue;
kvp(1, 'Bill');
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
let numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);
let empObj1 = {
    empCode: 1,
    empName: "Steve",
    SSN: 100
};
//empObj1.SSN = 200; // error(readonly)
console.log(empObj1);
let a2 = [1, 2, 3, 4];
let ro = a2;
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
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let squareOptions = { colour: "red", width: 100 };
let mySquare1 = createSquare(squareOptions);
let myArray = ["Alice", "Bob"];
console.log(myArray);
let empObj2 = {
    empCode: 1,
    gender: "male",
    name: "Bill"
};
console.log(empObj2);
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
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
let sum = function (x, y) {
    return x + y;
};
console.log(sum(4, 5));
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(6, 7));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); // works correctly now
console.log(result1);
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1 - 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result3);
function buildName1(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result5 = buildName1("Bob"); // works correctly now, returns "Bob Smith"
console.log(result5);
let result6 = buildName1("Bob", undefined); // still works, also returns "Bob Smith"
console.log(result6);
//let result7 = buildName1("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1 - 2 arguments, but got 3.
let result8 = buildName1("Bob", "Adams"); // ah, just right
console.log(result8);
// rest parameters
function buildName2(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
