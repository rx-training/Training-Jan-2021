function display<T> (age:T):T{
    return age;
}
let out1 = display<string>("Welcome");
let out2 = display<number>(100);
console.log(out1);
console.log(out2);

//Genric interface

interface studentInfo<T,U>{
    (id:T,value:U):void;
};
function studentData(id:number,value:string):void{
    console.log('ID = '+id+'\nName = '+value);
};

let std: studentInfo<number,string> = studentData;
std(11,"Niraj Sapra");


// Create Modules
//perticuler module

import {book} from "./book";
let notes = new book(2,"priya");
notes.bookdisplay();

//Entire modules 

import * as Emp from  "./book";
Emp.addToZ(25,10);

//Remaining
import {book as Emps}  from  "./book";
let add   = new Emps(2,"kemi");
add.bookdisplay();