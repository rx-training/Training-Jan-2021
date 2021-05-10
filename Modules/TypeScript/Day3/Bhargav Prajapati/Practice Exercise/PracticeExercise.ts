console.log("===========================Generic Function ============================");

function Identity<Type>(args:Type):Type
{
    return args

}

var result=Identity<string>("Hello World");
console.log(`String Data is Printed :- ${result}`);
var result1=Identity<number>(25);
console.log(`Integer data is Printed :- ${result1}`);


console.log("===============================Generic Class=================================");
class StudentInfo<T,U>
{
    private Id:T;
    private Name :U;

     SetValue(Id: T,Name: U):void
      {

        this.Id=Id;
        this.Name=Name;   
      }
      GetValue():void
      {
          console.log(`Id :- ${this.Id}`);
          console.log(`Name :- ${this.Name}`);
      }
    
}

var std =new StudentInfo();
std.SetValue(101,"Rohit");
std.GetValue();

std.SetValue("202","Virat");
std.GetValue();
console.log("===============================Generic InterFace=================================");

interface StdInfo<T,U>
{
    (Id:T,Value:U):void;
}
function DisplayData(Id:number,Value:string):void {


    console.log(`Id :- ${Id}`);
    console.log(`Name :- ${Value}`);
    
}

var std4:StdInfo<number,string> = DisplayData;

std4(1,"Rohit Sharma");


export{Identity,StudentInfo,StdInfo,DisplayData}