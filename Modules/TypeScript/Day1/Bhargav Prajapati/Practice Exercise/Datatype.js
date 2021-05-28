var age = 45;
var fname = "Bhargav";
var isUpdated = true;
console.log("Number Datatype :- " + age);
console.log("String Datatype :- " + fname);
console.log("Boolean Datatype :- " + isUpdated);
console.log("==============================");
var firstNumber = 123;
console.log("Number :- " + firstNumber);
var secoundNumber = 0x37CF;
console.log("Hexadecimal Number :- " + secoundNumber);
var thirdNumber = 2047;
console.log("Octal Number :- " + thirdNumber);
var fourthNumber = 57;
console.log("Binary Number :- " + fourthNumber);
// function Hello():void
// {
//     console.log("Hello world");
// }
// Hello();
var FirstName = "Bhargav";
var LastName = "Prajapati";
var FullName1 = FirstName + "  " + LastName;
console.log("FullName :- " + FullName1);
var FullName2 = FirstName + ' ' + LastName;
console.log("FullName :- " + FullName2);
function ProcessData(x, y) {
    return x + y;
}
var result = ProcessData("Hello", "World");
console.log("Result :- " + result);
result = ProcessData(2, 4);
console.log("Result :- " + result);
console.log("Simple Array");
var arr = [2, 4, 6, 8];
arr.forEach(function (element) {
    console.log(element);
});
console.log("Multi Type Array");
var arr1 = ["Mengo", 2, "Banana", "Apple", 5, 6];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var iterator = arr1_1[_i];
    console.log(iterator);
}
