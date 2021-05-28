class Employee{
    empCode : number;
    empName : string;

    constructor(code:number,name:string){
        this.empCode = code;
        this.empName = name ;
    }

    getSalary():number{
        return 10000;
    }

}

let emp = new Employee(12,"Jevik");
console.log(emp.getSalary());


let a : [string,number];
a=["jevik",21];

console.log(a);


var emplo : [number,string][];
emplo =[ [1,"ejads"],[2,"skadj"],[4,"sad"] ];
console.log(emplo);

let code:(string|number);
code = 123;
code ="jevik";
console.log(code);


function display(value :(number|String)){
    if(typeof(value)=="number")
    console.log("number data");
    else if(typeof(value) == "string")
    console.log('String Data');
}
display(123);
display("jevik");


enum Coler{
    red,geen,blue
}
let c: Coler;
c = Coler.geen;
console.log(c);

let x= Coler.red
console.log(x);

console.log(Coler[0]);


interface IEmployees1{
    empCode: number;
    name : string;
    getSalary:(number)=>number;
}
class Employees1 implements IEmployees1{
    empCode: number;
    name: string;

    constructor(code: number, name: string){
        this.empCode = code;
        this.name =name;
    }

    getSalary(empCode: number):number{
        return 20000;
    }
}

let emp1 = new Employees1(1,"ejvi");
console.log(emp1.getSalary(1));

interface KeyPair{
    key:number;
    value: string;
}

let Kv1: KeyPair ={key:1,value:"jevik"};
console.log(Kv1);

interface KeyvalProcessor{
    (key:number,value:string):void;
};
function addKeyval(key:number,value:string) : void{
    console.log('key ='+ key +',val ='+value)
}
let kvp : KeyvalProcessor = addKeyval;
kvp(1,"jevik");

interface NumList{
    [index:number] : number
}
let numarr : NumList =[11,32,3];
console.log( numarr[0]);
console.log( numarr[1]);


interface Iemp{
    empCode:number;
    empName:string;
    empDept?:string;
    readonly SSN: number;

}

let empObj1 : Iemp={
    empCode:4,
    empName :"jevik",
    SSN : 4
}
console.log(empObj1);


interface   Iperson{
    name:string;
    gender:string;

}
interface Iemployyy extends Iperson{
    empCode:number;
}
let empObbj :Iemployyy={
    empCode:1,
    name:"jevik",
    gender:"male"
}

console.log(empObbj);



function addNum(num1:number,num2:number):number{
    return num1+num2;
}
 
let sum = function(a:number,b:number):number{
    return a+b;
};

console.log(addNum(2,5));
console.log(sum(1,2));