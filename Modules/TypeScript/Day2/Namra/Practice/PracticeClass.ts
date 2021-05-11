class Greeter {
    greeting : string;

    constructor(message:string)
    {
        this.greeting = message;
    }

    greet()
    {
        return `Hello ${this.greeting}`;
    }
}

let greeter = new Greeter("World");
console.log(greeter.greet());

//Inheritance

class Animal{
    move(distanceInMeters : number = 0){
        console.log(`Animal Moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal{
    bark()
    {
        console.log('Woof! Woof!');
    }
}
console.log();
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Animals {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
  
class Snake extends Animals {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
  
class Horse extends Animals {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
  
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
  
sam.move();//by default value is 5
tom.move(34);

//public 

class publicAnimal {
    public name : string;
    public constructor(theName : string){
        this.name = theName;
    }
    public move(distanceInMeters : number)
    {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

new publicAnimal('Cat').name;// will not give an error

// Private

class privateAnimal{
    private name : string;// or private name : string
    constructor(theName : string)
    {
        this.name = theName;
    }
}
//new privateAnimal("Cat").name; will raise an error

//protected

class person
{
    protected name:string;
    constructor(name : string){
        this.name  = name;
    }
}
class Employee extends person
{
    private department : string;
    constructor(name : string, department : string)
    {
        super(name);
        this.department = department;
    }
    public getElevatorPitch()
    {
        return `Helllo, my name is ${this.name} and I work in ${this.department}`;
    }
}
let howard = new Employee("Howard",'Sales');
console.log(howard.getElevatorPitch());
//howard.name; will raise an error as it is protected so accessible where class is extended

//Readonly
class Octopus
{
    readonly name : string;
    readonly numberOfLegs : number = 6;
    constructor (theName : string)
    {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 storng legs");
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

//--------------------------------------------abstract
abstract class Department {
    constructor(public name: string) {}
  
    printName(): void {
        console.log("Department name: " + this.name);
    }
  
    abstract printMeeting(): void; // must be implemented in derived classes
}
class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
  
    printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }
  
    generateReports(): void {
      console.log("Generating accounting reports...");
    }
}
    let department: Department; // ok to create a reference to an abstract type
    //department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports

