//Create Map
let person = new Map();
//Setting Map value
person.set(1, "Riya");
person.set(2, "Riya");
person.set(3, "Riya");
//Key of map
for (let key of person.keys()) {
    console.log("Map Keys are:" + key);
}
//Values of map
for (let value of person.values()) {
    console.log("Map values are:" + value);
}
//Map entrie
for (let entry of person.entries()) {
    console.log(entry[0], entry[1]);
}
let map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.log("Value1= " + map.get(1));
console.log("Value2= " + map.get('1'));
console.log("Key is Present= " + map.has(3));
console.log("Size= " + map.size);
console.log("Delete value= " + map.delete(1));
console.log("New Size= " + map.size);
let ageMapping = new Map();
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
//Iterate over map keys  
for (let key of ageMapping.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (let value of ageMapping.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
//Date
let date = new Date();
console.log(date);
let date1 = new Date(2999000);
console.log(date1);
let date2 = new Date("2020-10-10");
console.log(date2);
let date3 = new Date(2018, 5, 5, 17, 23, 42, 11);
console.log(date3);
let date4 = new Date(2016, 4, 4, 4, 5, 4, 15);
date4.setDate(10);
date4.setMonth(5);
date4.setFullYear(2021);
date4.setHours(1);
date4.setMinutes(15);
date4.setMilliseconds(50);
console.log(date4);
let studentInfo = new Set();
studentInfo.add("Riya");
studentInfo.add("Reena");
studentInfo.add("Meena");
console.log(studentInfo);
console.log(studentInfo.has("Reena"));
console.log(studentInfo.has(4));
studentInfo.clear();
console.log(studentInfo);
