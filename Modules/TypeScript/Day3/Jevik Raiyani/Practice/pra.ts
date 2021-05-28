function display<T>(agr: T) : T{
    return agr;
}
let x = display<number>(123);
let y = display<string>("dasd");
console.log(x);
console.log(y);

class StudentInfo<T,U>{
    private Id:T;
    private Name:U;

    setValue(id:T,name:U) : void{
        this.Id = id;
        this.Name = name;
    }

    display(): void{
        console.log(`Id  =${this.Id} , Name =  ${this.Name}`);
    }
}
let p = new StudentInfo<number,string>();
p.setValue(1,"jevikk");
p.display();

let q = new StudentInfo<string,string>();
q.setValue("213","jevik");
q.display();


interface DataStudent<T,U>{
    (id:T,value:U) :void;
};
function StudentData(id: number,value:string): void{
    console.log(`id is ${id} value is ${value}`)
}
 
let std : DataStudent<number,string> = StudentData;
std(1,"jevik");


function new11<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
}
let n1 =  new11<number>([1,2,3]); 
console.log(n1);
let n2  = new11<string>(["jeivk","Raiyani"]);
console.log(n2);

// class BeeKeeper {
//     hasMask: boolean;
//   }
  
//   class ZooKeeper {
//     nametag: string;
//   }
  
//   class Animal {
//     numLegs: number;
//   }
  
//   class Bee extends Animal {
//     keeper: BeeKeeper;
//   }
  
//   class Lion extends Animal {
//     keeper: ZooKeeper;
//   }
  
//   function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
//   }
//   createInstance(Lion).keeper.nametag;
//   createInstance(Bee).keeper.hasMask;
  



//module
import {Emp} from  "./Module";
let p1 = Emp(2,"jeivk");

import { StudentData as data} from "./Module";
let newStudent = new data(1,"Jevik");
newStudent.Display();
let newStudent2 = new data(2,"aasd");
newStudent2.Display();

import * as AllModule   from "./module";
AllModule.Emp(4,"aa");
new AllModule.StudentData(1,"aa").Display();



