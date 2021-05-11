var fname = "Namra";
console.log(fname);
var first = 123;
console.log(first);
var second = 0x37CF;
var third = 255;
var fourth = 57;
console.log(second);
console.log(third);
console.log(fourth);
var OpNumber = 1230.034;
var expNumber = OpNumber.toExponential();
console.log(expNumber);
var fixNumber = OpNumber.toFixed(2);
console.log(fixNumber);
console.log("To local string : ");
console.log(OpNumber.toLocaleString());
console.log("To precision :");
console.log(OpNumber.toPrecision());
console.log(OpNumber.toPrecision(1));
//String number
var strNumber = new Number(10);
console.log(strNumber.toString());
console.log(strNumber.toString(2));
console.log(strNumber.toString(8));
//value of function()
console.log(strNumber.valueOf());
// void 
var unusable = undefined;
console.log(unusable);
function helloUser() {
    console.log("Function is called...");
}
helloUser();
var employeeName = "Namra";
var employeeLastName = "Patel";
var employeeFullName = employeeName + " " + employeeLastName;
console.log(employeeFullName);
//string
var str = "How Are you?";
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
// null
var num = null;
var str1 = null;
var bool = null;
//Any
var val = "Hi";
val = 555; //Ok
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData("Hello", "Any!"); //Hello Any!
result = ProcessData(2, 3); //5
//Array
var list = [1, 3, 5];
var list1 = [1, 2, 3];
//var list2 : (string|number)[] = ['Apple',2,'Orange',3,4,'Banana'];
var list2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
for (var index in list) {
    console.log(list[index]);
}
var fruits = ['A', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); //['A','Banana','Orange']
console.log(fruits.pop()); //orange
fruits.push('papaya'); //['A','Banana','papaya']
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits);
fruits.indexOf('papaya'); //2
var newArr = fruits.filter(function (fruits, i, arr) {
    return fruits.length < 2;
}); //orange,banana
//Tuple
var x;
x = ["Hello", 10]; // Ok
//x = [ 10,'Hello'] // will generate error
// x[1].substring(1) will generate error of property'substring does not exist on type number'
// x[0].substring(1) will not give an error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // will print 2 as index number 
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var cl = Colors.Blue;
console.log(cl);
var Colors1;
(function (Colors1) {
    Colors1[Colors1["Red"] = 1] = "Red";
    Colors1[Colors1["Green"] = 2] = "Green";
    Colors1[Colors1["Blue"] = 4] = "Blue";
})(Colors1 || (Colors1 = {}));
var clr = Colors1.Blue;
console.log(clr);
