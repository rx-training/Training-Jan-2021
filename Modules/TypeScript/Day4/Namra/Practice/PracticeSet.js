import { ageMapping } from "./PracticeMap";
// sets are bit similar to maps, but it stores only keys, not key-value pair.
// It stores distinct data
let studentEntries = new Set();
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
console.log(studentEntries.delete("Dhawan"));
//Clear whole Set  
studentEntries.clear();
//Returns Set data after clear method.  
console.log(studentEntries);
//chaining of set methods
studentEntries.add("John").add("Peter").add("Gayle").add("Kohli");
//Returns Set data  
console.log("The List of Set values:");
console.log(studentEntries);
let diceEntries = new Set();
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);
//Iterate over set entries  
console.log("Dice Entries are:");
for (let diceNumber of diceEntries) {
    console.log(diceNumber);
}
// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");
diceEntries.forEach(function (value) {
    console.log(value);
});
// imported map
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
