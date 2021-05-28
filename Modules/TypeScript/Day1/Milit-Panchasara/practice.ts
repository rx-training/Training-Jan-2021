
var age = 99;
age = "abc"; // will show warning bcz age is an number valued variable, still it will convert to JS

var age2:any = 99;
age2 = "NA"; // use any to use diff. datatypes

var fname:string = 'Milit';
var boolvar:boolean = true;
var numvar:number = 1.3003030;

var f1 = numvar.toExponential(2);
console.log(f1);

var f2 = numvar.toFixed(2);
console.log(f2);

var f3 = numvar.toString();
console.log(f3);

var f4 = numvar.toPrecision(2);
console.log(f4);

var f5 = numvar.valueOf();
console.log(f5);

function func1(): void {
    console.log("this is function 1");
}

func1();

console.log(`Name : ${fname}`);

var x1:number = null;
var x2:string = null;
var x3:boolean = null;

var strArray:Array<string> = ["x","y","z"];
var numArray: number[] = [1, 2.1212, 12];

var multiArray:Array<string | number> = ["z", 1, "zxxzx", 121.1212];

for(var index in multiArray)
{
    console.log(multiArray[index]);
}

for(var value in multiArray)
{
    console.log(value);
}

var filteredArray = multiArray.filter((item,x, multiArray) => {console.log(typeof item );
 return typeof item == "number"});
console.log("filtered Array:");
for(var index in filteredArray)
{
    console.log(filteredArray[index]);
}

for(var value in filteredArray)
{
    console.log(value);
}

var xx:any  = 898;
console.log(xx.toFixed(2));

const value1 = Math.random() < 0.5 ? "a" : "b";
if (value1 !== "a") {
  console.log("IF");
} else if (value1 === "b") { // shows unreachable code
  console.log("ELSE");
}

var str2:string = "aaa";
console.log(str2.normalize());


