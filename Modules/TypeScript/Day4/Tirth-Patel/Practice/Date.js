var dates = new Date();
console.log("Date=" + dates);
//new date  by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
var date1 = new Date(32320000000);
console.log(date1);
//new Date(datestring): It creates a new date object from a date string.
var date2 = new Date("2019-01-16");
console.log("Date = " + date2); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)
//create new date object with specified values
var date3 = new Date(2018, 5, 5, 17, 23, 42, 11);
console.log(date3);
//various date method few of them are listed below
var date = new Date(2017, 4, 4, 17, 23, 42, 11);
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
