// Map
let trialMap = new Map();
trialMap.set(1, "Value1"); // Map can contain only 2 values. First is considered as key and second is considered as value
trialMap.set("Second Value", true);
trialMap.set(false, 420);
//Iterate over map keys
for (var key of trialMap.keys()) {
    console.log(`Map Keys : ${key}`);
}
console.log("");
//Iterate over map values
for (var val of trialMap.values()) {
    console.log(`Map Values : ${val}`);
}
console.log("");
console.log(trialMap.delete(false));
//Iterate over map entries
for (var entry of trialMap.entries()) {
    console.log(`Map Key : ${entry[0]}, Map value : ${entry[1]}`);
}
console.log("");
console.log(trialMap.get(1)); // Prints Value1
console.log(trialMap.has(false)); // Prints true bcoz it gets the key FALSE
console.log(trialMap.size); // Prints 2
console.log(trialMap.clear()); // Deletes the map
console.log(trialMap.size); // Returns 0 bcoz the map is deleted
console.log("");
// Set
let trialSet = new Set();
var arr = [
    { "Num1": 12, "Num2": 23, "Num3": 34 },
    { "Num4": 12, "Num5": 23, "Num6": 34 }
];
trialSet.add(arr).add("String").add(2342).add(true); // Chaining of Set
console.log(trialSet);
console.log(trialSet.size);
console.log("");
// First ways of iterating
for (var set of trialSet) {
    console.log(set);
}
console.log("");
// Second way of iterating
trialSet.forEach(function (value) {
    console.log(value);
});
console.log("");
// Date
var Cdate = new Date();
console.log(`Current date : ${Cdate}`);
var millisecond = new Date(5000000000000); // creates a new date object as zero time plus milliseconds.
console.log(`Date(millisecond) : ${millisecond}`);
var trialDate = new Date(2020, 12, 5); // Also accepts date like this "2020-01-19"
console.log(`Date : ${trialDate}`);
console.log(`getDate() : ${trialDate.getDate()}`);
console.log(`getFullYear() : ${trialDate.getFullYear()}`);
console.log(`getUTCDate() : ${trialDate.getUTCDate()}`); // Returns 4 bcoz UTC returns date according to time
trialDate.setDate(25);
console.log(`setDate() : ${trialDate.getDate()}`);
console.log(`toString() : ${trialDate.toString()}`);
console.log(`getDay() : ${trialDate.getDay()}`); // Starts from Sunday that is 0
console.log(`valueOf() : ${trialDate.valueOf()}`); // Returns primitive value 
