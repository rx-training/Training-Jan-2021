//class Example 
console.log("=======================Class Example=============================");
class Employee
{
    EmployeeCode:number;
    EmployeeName:string;

    constructor(EmpCode:number,EmpName:string)
    {
        this.EmployeeCode=EmpCode;
        this.EmployeeName=EmpName;
    }
   
    Display()
    {
        console.log(`EmployeeCode :- ${this.EmployeeCode}`);
        console.log(`Employee Name :- ${this.EmployeeName}`);
    }

}


var e1=new Employee(101,"Parth");
var e2=new Employee(102,"Bhavik");
e1.Display();
e2.Display();


//Enum Example
console.log("=========================Enum Example ==============================");
enum Color
{
    Blue,
    Red,
    Green,
    Yellow
}

console.log(`Blue Color Position :- ${Color.Blue}`);
console.log(`Red Color Position :- ${Color.Red}`);
console.log(` Greeen Color Position :- ${Color.Green}`);
console.log(`Yellow Color Position :- ${Color.Yellow}`);


console.log("========================Tuple Example==================");

var emps:[number,string][]=[];

emps=[[1,"Stave"],[2,"Bill"],[3,"Jeff1"]]
console.log(emps);


console.log("=========================Union Example============================");

function UninonDisplay(value : number | string)
{
    if(typeof value == "number")
    {
        console.log(`The type of ${value}  is Number`);
    }
    else
    {
        console.log(`The type of ${value} is String`);
    }
}

UninonDisplay(25);
UninonDisplay("AWSASASASSA");
// InterFace Example

console.log("==================Interface Example===================");


interface IEmployee
{
    EmployeeId:number;
    EmployeeFullName:string;
    EmployeeSalary:number;
    Dispyay():void;
}

class EmployeesofCompony implements IEmployee
{
    EmployeeId: number;
    EmployeeFullName: string;
    EmployeeSalary: number;
    constructor(EmployeeId:number,EmployeeFullName:string,EmployeeSalary:number) 
    {
       
        this.EmployeeId=EmployeeId;
        this.EmployeeFullName=EmployeeFullName;
        this.EmployeeSalary=EmployeeSalary;
    }
    Dispyay(): void {
       console.log(`EmployeeId :- ${this.EmployeeId}`);
       console.log(`EmployeeFullName :- ${this.EmployeeFullName}`);
       console.log(`EmployeeSalary :- ${this.EmployeeSalary}`);
    }
    
}

var data1=new EmployeesofCompony(1,"Parth Prajapati",50000);
var data2=new EmployeesofCompony(2,"Pankaj Thakkar",70000);
data1.Dispyay();
data2.Dispyay();

//InterFace Can be used  as type

console.log("============================Interface  As Type===========================");
interface KeyPairType
{
    Key:number;
    Value:String;

}
var newkeypairvalue:KeyPairType[]=[{Key:1,Value:"Steve"},{Key:2,Value:"John"},{Key:3,Value:"Doe"}]
for (var iterator of newkeypairvalue) {

    console.log(`Value Of Key :- ${iterator.Key}`);
    console.log(`Value Of Pair :- ${iterator.Value}`);
}



console.log("========================Interface As Function Type======================");

interface KeyValueProcessor 
{
    (Key:number,value:string):void;
}

function AddValueKey(Key:number,value:string)
{
    console.log(`Value Of Key :- ${Key}`);
    console.log(`Value Of Pair :- ${value}`);
}

var kvp:KeyValueProcessor=AddValueKey;
kvp(1,"Hello");
kvp(2,"World");


console.log("===========================Interfade for Array Tye===================");

interface NumList
{
    [index:number]:number;
}

var numarr:NumList=[1,2,3,4]

console.log(numarr[0]);
console.log(numarr[1]);
console.log(numarr[2]);
console.log(numarr[3]);

console.log("=========================Iterface for Creating  Properties===================");

interface IPeople
{
    id:number;
    Name:string;
    department?:string;
}

var pepoledata:IPeople[]=[{id:1,Name:"Abhishek",department:"Computer"},{id:2,Name:"Mit"}]

for (var Dataaa of pepoledata)
{
    console.log(`Id Of Employee :- ${Dataaa.id}`);
    console.log(`Name of Emplyoyee :- ${Dataaa.Name}`);
    console.log(`Department Of Employee :- ${Dataaa.department}`);
    
}


console.log("==================Extending The InterFace In Class====================");


interface Teacher
{
    id :number;
    Name:string;
    
    

}
interface TeacherData extends  Teacher
{
    Address:string;
    Department:string;

}

var obj:TeacherData={id:1,Name:"ASAWEWD",Address: "dsdsdsdsd",Department:"It"}

console.log(`Id :- ${obj.id}`);
console.log(`Name :- ${obj.Name}`);
console.log(`Address :- ${obj.Address}`);
console.log(`Department :- ${obj.Department}`);



console.log("=======================Function Example=============");

var fun=function(number1:number,number2:number):number   
{
    return number1+number2;
}

console.log(`Addition Of Two Number :- ${fun(25,30)}`);






