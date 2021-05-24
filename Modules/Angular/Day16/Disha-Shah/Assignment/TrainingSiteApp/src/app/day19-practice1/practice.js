export function practice(){
    //Area of Circle using Function Expression
    function circleArea() {
        var r = parseInt(document.getElementById("num1").value);
        var x = function(a,b) {return Math.PI*r*r};
        var z = x(r);
        document.getElementById("result").innerHTML = 'Area of Circle is: ' + z;
        return false;
    }

    //Area of Rectangle using Function Constructor
    function recArea() {
        var l = parseInt(document.getElementById("num2").value);
        var w = parseInt(document.getElementById("num3").value);
        var x = new Function("a","b", "return a*b");
        var z = x(l,w);
        document.getElementById("result1").innerHTML = 'Area of Rectangle is: ' + z;
        return false;
    }

    //Function Hoisting example
    console.log(myFunction(5));
    function myFunction(y) {
        return y * y;
    }

    //call() for employee object
    function empDetails() {
        var eName = document.getElementById("eName").value;
        var eAddress = document.getElementById("eAddress").value;
        var eDesignation = document.getElementById("eDesignation").value;
        var employee = {
            details: function() {
                return this.name + " is living at " + this.address + " & works as a " + this.designation;
            }
        }

        var emp1 = {
            name: eName,
            address: eAddress,
            designation: eDesignation
        }

        var x = employee.details.call(emp1); 
        document.getElementById("result2").innerHTML = "Result using call() " + x;
        var y = employee.details.apply(emp1); 
        document.getElementById("result3").innerHTML = "Result using apply() " + y;
        return false;
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}