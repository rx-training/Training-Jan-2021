var arr2 = [1, "Abc"];
console.log("Push Method");
console.log(arr2.push(2, "DEF"));
var arr3 = arr2.sort();
console.log("Shorted Array");
console.log(arr3);
console.log("Pop Mehthod :-" + arr2.pop());
var arr4 = [5, 6, 7];
console.log("Concate method");
var arr5 = arr2.concat(arr4);
console.log(arr5);
console.log("Indexof Method :-  " + arr5.indexOf(7));
var arrw = [11, 10, 89, 88, 77, 50];
function iseven(element) {
    return (element % 2 == 0);
}
var value = arrw.filter(iseven);
console.log("Filter Method :-");
console.log(value);
