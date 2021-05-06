var studentEntries = new Set();
//Add Values  
studentEntries.add("Niraj");
studentEntries.add("Nill");
studentEntries.add("Jevik");
studentEntries.add("viral");
studentEntries.add("Charmi");
//Returns Set data  
console.log(studentEntries);
//Check value is present or not  
console.log(studentEntries.has("Niraj"));
console.log(studentEntries.has(10));
//It returns size of Set  
console.log(studentEntries.size);
//Delete a value from set  
console.log(studentEntries["delete"]("Dhawan"));
//Clear whole Set  
studentEntries.clear();
//Returns Set data after clear method.  
console.log(studentEntries);
