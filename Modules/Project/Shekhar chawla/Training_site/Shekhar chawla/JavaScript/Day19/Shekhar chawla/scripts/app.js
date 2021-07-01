// Practice 1 Using Function Expression, find the area of circle
var circle = function(r=5) {
	return 3.14*r*r;
}
var areaOfCircle = function() {
	ip = document.getElementById('areaIp').value;
	op = circle(ip);
	document.getElementById('areaResult').innerHTML = op;	
}

// Using Function Constructor, find the area of rectangle
var rectangle = new Function("l=2", "b=6", "return l*b");
var areaOfRect = function() {
	l = document.getElementById('areaRectLIp').value;
	b = document.getElementById('areaRectBIp').value;
	op = rectangle(l,b);
	document.getElementById('areaRectResult').innerHTML = op;	
}

// Explain usage of Function Hosing using example
num = 5; // assigned value first
document.getElementById("numResult").innerHTML = num;
var num; // then declared

// Using Function call create employee object with field Name, Address and Designation and pass it to function.
var emp = {
	name : "Ankur",
	address : "Rajkot",
	role : "Graphics Engineer",
	emps : function() {
		return this.name + " is a " + this.role + " lives in "+ this.address;
	}
}
emp1 = {
	name : "Meet",
	address : "Surat",
	role : "Network Engineer"
}
document.getElementById("callResult1").innerHTML = emp.emps.call(emp1);
document.getElementById("callResult2").innerHTML = emp.emps();

// Using Function Apply pass employee object to a function defined in the function.
emp2 = {
	name : "Mitul",
	address : "Vadodara",
	role : "Admin Team"
}
document.getElementById("callResult3").innerHTML = emp.emps.apply(emp2); // it also takes array as additional args


// Explain Function closure with practical
var add = (function() {
	var x = 1;
	return function() {
		x+=1;
		return x;
	}
})();

add();
add();
console.log("x ",add());



