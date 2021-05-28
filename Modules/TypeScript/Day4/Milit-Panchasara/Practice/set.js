let newSet = new Set();
newSet.add(1);
newSet.add("abc");
console.log(newSet.has(1));
newSet.delete(1);
console.log(newSet.size);
newSet.clear();
console.log(newSet.size);
newSet.add(1).add(2).add(3).add(4).add(5).add(6);
//Iterate over set entries  
console.log("Entries are:");
for (let item of newSet) {
    console.log(item);
}
