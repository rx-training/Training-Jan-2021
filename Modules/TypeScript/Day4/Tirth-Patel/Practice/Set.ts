var myset = new Set();
//chaining the add method
myset.add("Tirth").add("World");

for(var set of myset){
    console.log(set);
}
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

let diceEntries = new Set();  
  
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);  
// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");   
diceEntries.forEach(function(value) {  
  console.log(value);     
});  