//alert("Hello World");
//string
var fname = "John";
var lname = "Sharma";
console.log(fname);
var fullname = "Full name is " + fname + " " + lname;
console.log(fullname);
function fullName() {
    //var fullname = fname +" " +lname;
    var fullname = fname + " " + lname;
    return fullname;
}
console.log(fullName());
//concate
var fullname = fname + " " + lname;
console.log(fullname);
//number
var number1 = 10;
var number2 = 20 * 10;
console.log(number1);
console.log(number2);
//boolean
var value = true;
console.log(value);
//void
var num = undefined;
console.log(num);
//void
function helloUser() {
    console.log("Hello world");
}
helloUser();
//any
var val = 10;
console.log(val);
val = "hello";
console.log(val);
function AddData(x, y) {
    console.log(x + y);
}
AddData(10, 20);
//Array
var list1 = [1, 3, 5];
var list2 = [1, 3, 4, 5];
for (var i; i < list2.length; i++) {
    //console.log(list2[i]);
}
for (var j in list1) {
    //console.log(list1[j]);
}
//Multi valued Array
var list3 = ["Apple", 1, "Mango", 2, 3, 4, 5];
for (var l1 in list3) {
    console.log(list3[l1]);
}
var list4 = ["Orange", "Apple", 1, 2, 3, 4, 5];
for (var l1 in list4) {
    console.log(list4[l1]);
}
//sort array
console.log(list4.sort());
//Pop
console.log(list4.pop());
//Push
console.log(list4.push("Papaya"));
list4 = list4.concat(["Cherry", "Strawberry"]);
console.log(list4);
//Filter
var list5 = ["Red", "Yellow", "Green", "Blue"];
console.log(list5);
var NewArray = list5.filter(function (list5, i, arr) { return list5.length < 5; });
console.log(NewArray);
var MyArray2 = [["abc", 1], ["xyz", 2]];
console.log(MyArray2);
console.log(MyArray2.pop());
console.log(MyArray2);
