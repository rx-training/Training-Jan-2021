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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
console.log(greeter.greet());
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal Moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
console.log();
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animals;
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
}(Animals));
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
}(Animals));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move(); //by default value is 5
tom.move(34);
//public 
var publicAnimal = /** @class */ (function () {
    function publicAnimal(theName) {
        this.name = theName;
    }
    publicAnimal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return publicAnimal;
}());
new publicAnimal('Cat').name; // will not give an error
// Private
var privateAnimal = /** @class */ (function () {
    function privateAnimal(theName) {
        this.name = theName;
    }
    return privateAnimal;
}());
//new privateAnimal("Cat").name; will raise an error
//protected
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Helllo, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(person));
var howard = new Employee("Howard", 'Sales');
console.log(howard.getElevatorPitch());
//howard.name; will raise an error as it is protected so accessible where class is extended
//Readonly
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 6;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 storng legs");
//dad.name ="Man with the 3 piece suit"; will raise an error as it is intialized to readonly
console.log(dad.name);
//Accessor --- get and set
// const fullNameMaxLength = 10;
// class EmployeeAccessor{
//     private _FullName : string = '';
//     get FullName():string{
//         return this._FullName;
//     }
//     set FullName(newName :string)
//     {
//         if(newName && newName.length > fullNameMaxLength)
//         {
//             throw new Error(`Full name has a max length of ${fullNameMaxLength}`);
//         }
//         this._FullName = newName;
//     }
// }
// let employee = new EmployeeAccessor();
// employee.FullName = 'Bob Smith';
// if(employee.FullName)
// {
//     console.log(employee.FullName);
// }
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
