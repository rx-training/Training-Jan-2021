//----------------------------------Class---------------------------------------------------------
class Employee{
    empCode: number;
    private empName: string;

    constructor(code: number, name: string) {
        this.empName=name;
        this.empCode=code;
    }

    getSalary() : string{
        return `${this.empName} has Salary = 10000`;
    }
}

// creating object
let employee = new Employee(12, "John Smith");
document.getElementById("app").innerHTML= `${employee.getSalary()} <br>`;

// inheritance
class Animal {
    move(distanceInMeters: number = 0) {
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
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
  
class Snake extends Animal1 {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
}
  
class Horse extends Animal1 {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
}
  
let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");
  
sam.move();
tom.move(34);

// private
class Animal2 {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  class Rhino extends Animal2 {
    constructor() {
      super("Rhino");
    }
  }
  
  class Employee1 {
    private name: string;
    constructor(theName: string) {
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
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Employee2 extends Person {
    private department: string;
  
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  
    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }
  
  let howard = new Employee2("Howard", "Sales");
  console.log(howard.getElevatorPitch());
  //console.log(howard.name);    //error(not accessible)

// protected constructor
class Person1 {
    protected name: string;
    protected constructor(theName: string) {
      this.name = theName;
    }
  }
  
  // Employee can extend Person
  class Employee3 extends Person1 {
    private department: string;
  
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  
    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }
  
  let howard1 = new Employee3("Howard", "Sales");
  //let john = new Person1("John");   //error(not accessible)

// readonly
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
  
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  let dad = new Octopus("Man with the 8 strong legs");
  //dad.name = "Man with the 3-piece suit";   // error(can't modify)
console.log(dad.name);

// Accessors
const fullNameMaxLength = 10;

class Employee4 {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
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
    static origin = { x: 0, y: 0 };

    calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// use class as an interface
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

//----------------------------------------------Tuple------------------------------------------------------------------
// Declare a Tuple
let a: [string, number];

// Initialize it
a = ["hi", 8]; // Ok
console.log(a);
document.getElementById("app").innerHTML += `${a} <br>`;

var employees1: [number, string][];
employees1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employees1);
document.getElementById("app").innerHTML += `${employees1} <br>`;

//------------------------------------------------Union------------------------------------------------------------------
// Union Example
var emp1: [number, string][];
emp1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(emp1);

let code: (string | number);
code = 123;
console.log(code);

code = "ABC";
console.log(code);

// code = false; // compilation error

// passing union type in function parameter
function display(value: (number | string))
{
    if(typeof(value)==="number")
    {
        console.log(`${value} is a number`);
    }
    else if(typeof(value) === "string")
    {
        console.log(`${value} is a string`);
    }
}

display(123);
display("ABC");

//----------------------------------------------enum----------------------------------------------------------
// enum
enum Color {
    Red, Blue, Green
};

console.log(Color.Blue);

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Left);

enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
    console.log(`User : ${recipient}, Response : ${message}`);
}

respond("Princess Caroline", UserResponse.Yes);

enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(Direction1.Down);

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}

console.log(FileAccess.None);
console.log(FileAccess.Read);
console.log(FileAccess.Write);
console.log(FileAccess.ReadWrite);
console.log(FileAccess.G);

// enum as member types
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

enum E {
    X,
    Y,
    Z,
}

function f(obj: { X: number }) {
    console.log(obj.X);
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");

// reverse mappings
enum Enum {
    A,
}

let a1 = Enum.A;
let nameOfA = Enum[a1]; // "A"
console.log(nameOfA);

const enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

let directions = [
    Direction2.Up,
    Direction2.Down,
    Direction2.Left,
    Direction2.Right,
];

console.log(directions);

// Object vs Enums
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

EDirection.Up;
//(enum member) EDirection.Up = 0

ODirection.Up;
//(property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) { }

// It requires an extra line to pull out the keys
type Direction3 = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction3) { }

walk(EDirection.Left);
run(ODirection.Right);

//-----------------------------------------interface----------------------------------------------------------
interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (number) => number;
}

class Employee5 implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode: number): number {
        return 20000;
    }
}

let emp2 = new Employee5(1, "Steve");
console.log(emp2.getSalary(30000));

// interface as type
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" };
console.log(kv1);

// interface as function type
interface KeyValueProcessor {
    (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
    console.log(`addKeyValue: key = ${key}, Value: ${value}`);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill');


interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// interface for array type
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);

// interface for creating properties
interface IEmployee5 {
    empCode: number;
    empName: string;
    empDept?: string; // otional
    readonly SSN: number; // readonly
}            

let empObj1: IEmployee5 = {
    empCode: 1,
    empName: "Steve",
    SSN: 100
}

//empObj1.SSN = 200; // error(readonly)

console.log(empObj1);

let a2: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a2;
console.log(ro);

//ro[0] = 12; // error!
//Index signature in type 'readonly number[]' only permits reading.
//    ro.push(5); // error!
//Property 'push' does not exist on type 'readonly number[]'.
//    ro.length = 100; // error!
//Cannot assign to 'length' because it is a read - only property.
//    a = ro; // error!
//The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'

a2 = ro as number[];
console.log(a2);

// optional parameters
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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

//let squareOptions = { colour: "red" };
//let mySquare = createSquare(squareOptions);
//Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
console.log(myArray);
//myArray[2] = "Mallory"; // error!
//Index signature in type 'ReadonlyStringArray' only permits reading.

// extending interfaces
interface IPerson2 {
    name: string;
    gender: string;
}

interface IEmployee2 extends IPerson2 {
    empCode: number;
}

let empObj2: IEmployee2 = {
    empCode: 1,
    gender: "male",
    name: "Bill"
}

console.log(empObj2);

// Hybrid Type interface
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
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
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(3, 4));

// anonymous function
let sum = function (x: number, y: number): number {
    return x+y;
}
console.log(sum(4, 5));

let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

console.log(myAdd(6, 7));

function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
console.log(result1);
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1 - 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result3);

function buildName1(firstName: string, lastName = "Smith") {
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
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName5 = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName5);

// this and arrow functions
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
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