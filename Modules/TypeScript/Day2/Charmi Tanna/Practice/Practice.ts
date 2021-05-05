//class
class Employee 
{
    EmployeeID : number;
    EmployeeName : string;
    constructor(EmployeeID : number, EmployeeName:string)
    {
        this.EmployeeID = EmployeeID;
        this.EmployeeName = EmployeeName;
    }
    getSalary() : number
    {
        return 10000;
    }
}

var e = new Employee(1,"Bhumi Shah");
console.log(e);
console.log(e.getSalary());
//Tuples
var arr : [string,number,boolean];
arr=["abc",10,false];
//Enum
enum Color
{
    Red,Yellow,Green="4"
};
console.log(Color.Green);
let c : Color;
c = Color.Green;
console.log(c);
//Interface
interface IEmployee
{
    EmployeeID : number;
    EmployeeName : string;
    getSalary : (number)=>number;
}
class Emp implements IEmployee
{
    EmployeeID : number;
    EmployeeName : string;
    constructor(EmployeeID : number , EmployeeName : string)
    {
        this.EmployeeID = EmployeeID;
        this.EmployeeName = EmployeeName;
    }
    getSalary(EmployeeID : number) : number
    {
        return 20000;
    }
}
var e1 = new Emp(10,"Bhumi"); 
console.log(e1);
console.log(e1.getSalary(20000));
//Function
function add(a : number,b:number) : number
{
    return a+b;
}
console.log(add(10,20));
//Anonymous Function
let sum = function(a : number ,b : number)
{
    return a+b;
}
console.log(sum(20,30));
//Extended Interface
interface IPerson
{
    PersonNumber : number;
    PersonName : string;
}
interface IEmployee1 extends IPerson
{
    EmployeeID : number
}
//Interface initialization
let empObj : IEmployee1 = 
{
 PersonName : "Riya",
 PersonNumber : 2,
 EmployeeID : 1
}
console.log(empObj);
//Interface as type
interface KeyPair
{
    key : number;
    value :  string;
}
let key1 : KeyPair = {key : 1, value : "Riya"};
console.log(key1);
//Interface as Function Type
interface KwyValueProcessor
{
    (key : number , value : string) : void
};
function addKeyValue(key: number,value: string) : void
{
    console.log(key+" "+value);
}
//Interface for Array Type
interface NumList
{
    [index:number]:number
}
let NewArr : NumList = [1,2,3];
NewArr[0];
NewArr[1];
console.log(NewArr);
//Interface for creating Properties
interface IEmployee2
{
    empCode : number;
    empName : string;
}
let empObj2 : IEmployee2= 
{
    empCode : 1,
    empName : "Reena"
}
console.log(empObj2);
//Unions 
let data : string|number|boolean = 30;  
data = false;
console.log(data);
//Intersection
interface Persons {
    success: boolean;
    error?: { message: string };
  }
  
  interface Employees {
    artworks: { title: string }[];
  }
  type Customer = Persons & Employees;
//Interface
function PrintLabel(LabeledObJ : {label : string})
{
    console.log(LabeledObJ.label);
}
let myObj = {size :10,label : "Size 10 objects"};
PrintLabel(myObj);
//String Enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction.Up);