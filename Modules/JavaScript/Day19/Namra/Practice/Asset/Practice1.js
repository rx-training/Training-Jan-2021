var circleArea = function( radius ){return 3.14 * radius * radius}
function circle(){
    var radius = parseInt(document.getElementById("circleNumber").value);
    document.getElementById("circle").innerHTML="Area of Circle : " + circleArea(radius); 
}

/* var squareArea = Function("a", "return a * a");
function square(){
    var length = parseInt(document.getElementById("squareNumber").value);
    document.getElementById("square").innerHTML="Area of square : " + squareArea(length);
} */

function squareArea(length){
    this.length = length;
    return length * length;
}
function square(){
    var length = parseInt(document.getElementById("squareNumber").value);
    document.getElementById("square").innerHTML="Area of square : " + squareArea(length);
}

function hoist(){
    document.getElementById("hoist").innerHTML=hoistExample();
}
function hoistExample(){
    return "Hoisting is a JavaScript technique which moves variables and function declarations to the top of their scope before code execution begins. Within a scope no matter where functions or variables are declared, they're moved to the top of their scope.";
}

/* var person = {
    fullname : function(firstName, lastName, city , country){
        return firstName + " " + lastName +" lives in "+ city + ", Country name is "+country;
    }
} */


function callFunction(){
   
    var name =document.getElementById("name").value;
    var Lname =document.getElementById("Lname").value;
    var city =document.getElementById("city").value;
    var country =document.getElementById("country").value;
    if(name == "" || Lname == "" || city =="" || country == ""){
        alert("Enter Value in the textbox where it is missing");
    }
    var person = {
        fullname : function(lastName, city , country){
            return this.firstName + " " + lastName +" lives in "+ city + ", Country name is "+country;
        }
    };
    var person1 ={
        firstName : name
    };

    document.getElementById("callMethod").innerHTML = person.fullname.call(person1, Lname, city, country);
}

function ApplyFunction(){
   
    var name =document.getElementById("applyName").value;
    var Lname =document.getElementById("applyLname").value;
    var city =document.getElementById("applyCity").value;
    var country =document.getElementById("applyCountry").value;
    if(name == "" || Lname == "" || city =="" || country == ""){
        alert("Enter Value in the textbox where it is missing");
    }
    var person = {
        fullname : function(city,country){
            return this.firstName + " " + this.lastName +" lives in "+ city + ", Country name is "+country;
        }
    };
    var person1 ={
        firstName : name,
        lastName : Lname
    };

    document.getElementById("apply").innerHTML = person.fullname.call(person1,city,country);
}
var salaryUpdater = function(salary){
    var currentSalary = salary;
    var generator = function(){
        currentSalary += 10000;
        return currentSalary;
    };
    return generator;
};
var updateFn = salaryUpdater(50000);

function closureFunction(){
    document.getElementById("closure").innerHTML="Your Salary is 50000<br>Your incremented salary : "+updateFn();
}