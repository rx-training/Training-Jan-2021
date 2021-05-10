var age: number=45;
var fname: string="Bhargav";
var isUpdated: boolean=true;
console.log("Number Datatype :- " + age);
console.log("String Datatype :- " + fname);
console.log("Boolean Datatype :- "+isUpdated);



console.log("==============================");
var firstNumber: number=123;
console.log("Number :- " + firstNumber);
var secoundNumber:number=0x37CF;
console.log("Hexadecimal Number :- "+secoundNumber);
var thirdNumber:number=0o3777;
console.log("Octal Number :- "+thirdNumber);
var fourthNumber: number=0b111001;
console.log("Binary Number :- "+fourthNumber);

// function Hello():void
// {
//     console.log("Hello world");
// }
// Hello();


var FirstName:string="Bhargav";
var LastName:string="Prajapati";

var FullName1:string=`${FirstName}  ${LastName}`
console.log("FullName :- " + FullName1);

var FullName2:string=FirstName +' '+LastName;
console.log("FullName :- " + FullName2);


function ProcessData(x:any,y:any)
{
    return  x + y;
}

var result:any=ProcessData("Hello","World");
console.log("Result :- " +result);
result=ProcessData(2,4);
console.log("Result :- "+result);


console.log("Simple Array");
var arr:number[]=[2,4,6,8]
arr.forEach(element => {
   
    console.log(element);
});

console.log("Multi Type Array");
var arr1: Array<string | number>=["Mengo",2,"Banana","Apple",5,6]
for (const iterator of arr1) 
{
    console.log(iterator);    
}
