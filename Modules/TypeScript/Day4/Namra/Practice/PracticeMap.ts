
// It allows to store data in a key-pair and remembers the original insertion order of the keys similar to other language .
// In typescript, we can use any value as a key or as a value;

var map = new Map();
map.set('1','abhisek');
map.set(1,'www.ja.com');
map.set(true,'bool1');
map.set('2','ajay');

console.log(`Value 1 = ${map.get(1)}`);
console.log(`Value 2 = ${map.get('1')}`);
console.log(`key is present = ${map.has(3)}`);
console.log(`Size = ${map.size}`);
console.log(`Delete value = ${map.delete(2)}`);
console.log(`New size = ${map.size}`);



 let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log(`Map Keys= ${key}`);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log(`Map Values=  ${value}`);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  