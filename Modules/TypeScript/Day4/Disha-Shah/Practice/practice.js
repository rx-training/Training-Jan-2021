console.log("--------------------------------------------Map----------------------------------------");
var map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.log("Value1= " + map.get(1));
console.log("Value2= " + map.get('1'));
console.log("Key is Present= " + map.has(3));
console.log("Size= " + map.size);
console.log("Delete value= " + map["delete"](1));
console.log("New Size= " + map.size);
// Iterating map data
var ageMapping = new Map();
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
//Iterate over map keys  
for (var _i = 0, _a = ageMapping.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (var _b = 0, _c = ageMapping.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (var _d = 0, _e = ageMapping.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
var employees = [
    { FirstName: "Reena", LastName: "Sharma", Address: "C-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 240000, City: "Mumbai", DOJ: new Date("2020-01-16") },
    { FirstName: "Meena", LastName: "Tiwari", Address: "H-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 480000, City: "Delhi", DOJ: new Date("2019-01-16") },
    { FirstName: "Rita", LastName: "Pandya", Address: "E-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 360000, City: "Ahmedabad", DOJ: new Date("2020-01-16") },
    { FirstName: "Reshma", LastName: "Shah", Address: "A-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 640000, City: "Mumbai", DOJ: new Date("2019-01-16") },
    { FirstName: "Tina", LastName: "Agarwal", Address: "B-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 560000, City: "Pune", DOJ: new Date("2017-01-16") }
];
var empMap = new Map();
for (var index in employees) {
    empMap.set(parseInt(index) + 1, employees[index]);
}
console.log("--------------------Employee mapping---------------------------");
//Iterate over map keys  
for (var _f = 0, _g = empMap.keys(); _f < _g.length; _f++) {
    var key = _g[_f];
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (var _h = 0, _j = empMap.values(); _h < _j.length; _h++) {
    var value = _j[_h];
    console.log("Map Values= ");
    for (var index_1 in value) {
        console.log(value[index_1]);
    }
}
console.log("The Map Enteries are of DOJ>=2020 && city = mumbai: ");
var newArray = employees.filter(function (employees, i, arr) {
    return employees.DOJ.getFullYear() >= 2020 && employees.City == "Mumbai";
});
console.log(newArray);
console.log("------------------------------------------------Set----------------------------------------");
var studentEntries = new Set();
//Add Values  
studentEntries.add("John");
studentEntries.add("Peter");
studentEntries.add("Gayle");
studentEntries.add("Kohli");
studentEntries.add("Dhawan");
//Returns Set data  
console.log(studentEntries);
//Check value is present or not  
console.log(studentEntries.has("Kohli"));
console.log(studentEntries.has(10));
//It returns size of Set  
console.log(studentEntries.size);
//Delete a value from set  
console.log(studentEntries["delete"]("Dhawan"));
//Clear whole Set  
studentEntries.clear();
//Returns Set data after clear method.  
console.log(studentEntries);
//Chaining of add() method is allowed in TypeScript  
studentEntries.add("John").add("Peter").add("Gayle").add("Kohli");
//Returns Set data  
console.log("The List of Set values:");
console.log(studentEntries);
// Iterate set using for-of loop
var diceEntries = new Set();
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);
//Iterate over set entries  
console.log("Dice Entries are:");
for (var _k = 0, diceEntries_1 = diceEntries; _k < diceEntries_1.length; _k++) {
    var diceNumber = diceEntries_1[_k];
    console.log(diceNumber);
}
// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");
diceEntries.forEach(function (value) {
    console.log(value);
});
console.log("-------------------------------------Date-------------------------------------");
// Create new date
var date = new Date();
console.log("Date = " + date); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  
var date1 = new Date(500000000000);
console.log("Date = " + date1); //Date = Tue Nov 05 1985 06:23:20 GMT+0530 (IST) 
var date2 = new Date("2019-01-16");
console.log("Date = " + date2); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)
var date3 = new Date(2018, 5, 5, 17, 23, 42, 11);
console.log("Date = " + date3); //Date = Tue Jun 05 2018 17:23:42 GMT+0530 (IST)  
var date4 = new Date(2017, 4, 4, 17, 23, 42, 11);
date4.setDate(13);
date4.setMonth(13);
date4.setFullYear(2013);
date4.setHours(13);
date4.setMinutes(13);
date4.setSeconds(13);
console.log("Year = " + date4.getFullYear());
console.log("Date = " + date4.getDate());
console.log("Month = " + date4.getMonth());
console.log("Day = " + date4.getDay());
console.log("Hours = " + date4.getHours());
console.log("Minutes = " + date4.getMinutes());
console.log("Seconds = " + date4.getSeconds());
console.log("Time = " + date4.getTime());
console.log("to Time string = " + date4.toTimeString());
console.log("to string = " + date4.toString());
console.log("Milliseconds = " + date4.getMilliseconds());
