var map1 = new Map();
map1.set("Milit", 1);
map1.set("John", 2);
for (let key of map1.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (let value of map1.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of map1.entries()) {
    console.log(entry[0], entry[1]);
}
console.log(map1.get("John"));
console.log(map1.has("Milit"));
map1.delete("John");
map1.size;
map1.clear();
// run command: tsc --target es6 map.ts
