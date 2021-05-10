import {StdInfo,Identity,StudentInfo,DisplayData} from "./PracticeExercise"
import {Empdata} from "./new"


console.log("=====================Model Example =======================");

var data=new StudentInfo();
data.SetValue(3,"Hello Model");
data.GetValue();

var result=Identity<string>("Identity Method is called");
console.log(`String Value Is Printed :- ${result}`);
var result1=Identity<number>(2564);
console.log(`Integer Value Is Printed :- ${result1}`);


var data1:StdInfo<number,string>=DisplayData;
data1(1,"Dhoni");

for (const iterator of Empdata) {

    console.log(iterator);
    
}