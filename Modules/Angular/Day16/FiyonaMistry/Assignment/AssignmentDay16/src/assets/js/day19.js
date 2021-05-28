        // 1
        var x = function (a) {
            return Math.PI * a * a
        };
        var area = x(4);
        document.getElementById("circleArea");

        // 2
        var rec = new Function("w", "l", "return w * l");
        var recArea = rec(4, 3);
        document.getElementById("rectangleArea");

        // 3 
        document.getElementById("hoisting"); // calling before declaration
        function hoisting(a){
            return Math.pow(a,3);
        }

        // 4, 5
        var emp1 = {
            name : "ABC"
            // address : "Ahmedabad",
            // designation : "Designer"
        }
        var emp2 = {
            name : "XYZ"
            // address : "Ahmedabad",
            // designation : "Coder"
        }
        var emp = {
            empDetail : function(address, designation){
                return `Name : ${this.name}, Address : ${address}, Designation : ${designation}`;
            }
        }
        document.getElementById("theCall"); // takes arguments separately.
        document.getElementById("theApply");  // takes arguments as an array.

        // 
        var add = (function () {
        var counter = 0;
        for(var i = 0; i <= 5; i++){
                counter += 1; 
                document.getElementById("closure");
        }
        return counter
        })(); // self invoking
