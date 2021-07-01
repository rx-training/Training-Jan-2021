function area(r) {

    return (Math.PI * r * r);
}

document.getElementById('1st').innerHTML = "Area of circle  is " + area(4);

//fucntion as variable
var y = function (a, b) {
    return a + b;
}
var z = y(1, 2);
document.getElementById('2nd').innerHTML = z;

// funnction constructor

var x = Function("a", "return Math.PI * a *a");

var y = x(5);
document.getElementById('3rd').innerHTML = "area of circle with constructor is" + y;
//hoisting is the manner in which you define variable or function and then only use it

carName = 'szuki';
let carname;//this will generate error if yout put it in try and error 

var x, y, z;
x = y + z;
function xyz(x, y) {
    //always declare first and use later
}
//function call
var pc = {
    create: function () {
        return "name :" + this.fname + " address :" + this.add + " Designation is " + this.des;
    }
}
var emp1 = {
    fname: "tirth  patel",
    add: "ahmedabad",
    des: "trainee",
}
document.getElementById("4th").innerHTML = pc.create.call(emp1)
//function apply
var pc = {
    create: function (age, Id) {
        return "name :" + this.fname + " address :" + this.add + " Designation is " + this.des + " whos age is" + age + "and with ID " + Id
    }
}
var emp3 = {
    fname: "tirth  patel",
    add: "ahmedabad",
    des: "trainee",
}
document.getElementById('5th').innerHTML = pc.create.apply(emp3, ["23", "rx12"]);
//function closure
var add = (function () {
var counter = 0;
return function () {counter += 1; return counter;}
})();

function count(){
document.getElementById("6th").innerHTML = add();
}


// the counter is now 3