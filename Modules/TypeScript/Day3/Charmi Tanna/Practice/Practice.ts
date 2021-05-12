//Generic
function users<T>(data:T) : T
{
    return data;
}
console.log(users({Name:"Riya",Age:'10'}));
console.log(users("Riya"));
console.log(users(30));
console.log(users({Name:"Riya",Age:'10'}).Age);
//Modules
import SLogin from './Student'
import TLogin from './Teacher'
let teacher = new TLogin();
console.log(teacher.data);
let student = new SLogin();
console.log(student.data);
//Generic function
function Display<T> (arg : T) : T
{
    return arg;
} 
let output1 = Display<string> ("Hello World");
let output2 = (100);
console.log(output1);
console.log(output2);
//Generic class
class StudentInfo<T,U>
{
    Id : T;
    Name : U;
    setValue(id:T,name:U)
    {
        this.Id = id;
        this.Name = name;
    }
    diaplay() : void
    {
        console.log(`ID = ${this.Id},Name = ${this.Name}`);
    }
}
var s1 = new StudentInfo();
var s2 = new StudentInfo();
s1.setValue(1,"Riya");
s1.diaplay();
s2.setValue("2","Reena");
s2.diaplay();
//Generic Interface As Function Type
interface StudentInfo1<T,U>
{
    (id: T,value : U) : void;
};
function StudentData(id: number ,value : string) : void
{
    console.log(id,value);
}
//let std : StudentInfo<number,string>=StudentData;
//std(11,"Reena");