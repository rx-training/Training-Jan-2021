let simpledate: Date = new Date();  
console.log("Date = " + simpledate);

let bigdate: Date = new Date(500000000000);  
console.log("Date = " + bigdate);

let stringdate: Date = new Date("2019-01-16");  
console.log("Date = " + stringdate);


let fulldate: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
console.log("Date = " + fulldate);


let date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
date.setDate(13);  
date.setMonth(13);  
date.setFullYear(2013);  
date.setHours(13);  
date.setMinutes(13);  
date.setSeconds(13);  
console.log("Year = " + date.getFullYear());  
console.log("Date = " + date.getDate());  
console.log("Month = " + date.getMonth());  
console.log("Day = " + date.getDay());  
console.log("Hours = " + date.getHours());  
console.log("Minutes = " + date.getMinutes());  
console.log("Seconds = " + date.getSeconds());  