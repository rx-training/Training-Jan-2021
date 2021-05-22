export function practice(){
        console.log("hello");
        var pi = 3.14;
        var person = "John Doe";
        var answer = 'Yes I am!';

        document.getElementById("demo1").innerHTML =
        pi + "<br>" + person + "<br>" + answer;

        var carName;
        document.getElementById("demo2").innerHTML = carName + "<br>Type of carName: " + typeof(carName);

        var x = "5" + 2 + 3;
        document.getElementById("demo3").innerHTML = x;

        var y = 5 + 7 + "John";
        document.getElementById("demo4").innerHTML = y;

        var txt1 = "What a very ";
        txt1 += "nice day";
        document.getElementById("demo5").innerHTML = txt1;

        var x = 5;
        document.getElementById("demo6").innerHTML = x ** 2;

        var x = 5;
        document.getElementById("demo7").innerHTML = Math.pow(x,2);

        document.getElementById("demo8").innerHTML = "typeof 5: " +typeof(5) + "<br> " +
        "typeof hello: " + typeof("hello") + "<br>" + 
        "typeof 123.45: " + typeof(123.45) + "<br>" + 
        "typeof true: " + typeof(true) + "<br>" + 
        "typeof null: " + typeof(null);

        var x = ["apple", "mango", "banana"];
        document.getElementById("demo9").innerHTML = 
        "typeof array: " + typeof(x);

        var x ={
            firstName: "John",
            lastName: "Doe"
        }
        document.getElementById("demo10").innerHTML = 
        "typeof object: " + typeof(x);

        var car = "";
        document.getElementById("demo11").innerHTML =
        "The value is: " +
        car + "<br>" +
        "The type is: " + typeof car;

        document.getElementById("demo12").innerHTML =
        "typeof undefined: " + typeof undefined + "<br>" +
        "typeof null: " + typeof null + "<br>" +
        "result of ===: " + (null === undefined) + "<br>" +
        "result of ==: " + (null == undefined) + "<br>" + 
        "typeof function: " + typeof function mytypeOfFunc(){};

        var p1 = 0;
        var p2 = 0;
        function myFunction(p1, p2) {
            return p1 * p2;
        }
        document.getElementById("demo13").innerHTML = "Using function, 5 * 6 = " + myFunction(5, 6);

        

        function myAgeFunction() {
            var age, voteable;
            age = Number(document.getElementById("age").value);
            if (isNaN(age)) {
                voteable = "Input is not a number";
            } else {
                voteable = (age < 18) ? "Too young" : "Old enough";
            }
            document.getElementById("demo15").innerHTML = voteable;
        }

        var txt = "";
        var person = {fname:"Disha", lname:"Shah", age:21}; 
        var x;
        for (x in person) {
        txt += person[x] + "<br>";
        }
        document.getElementById("demo16").innerHTML = txt;

        var txt = "";
        var numbers = [45, 4, 9, 16, 25];
        numbers.forEach(myFunction);
        document.getElementById("demo17").innerHTML = txt;

        function myFunction(value, index, array) {
            txt = txt + value + "<br>"; 
        }

        let fruits = ["apple", "mango", "kiwi"];
        let text = "";
        for (let x of fruits) {
        text += x + "<br>";
        }
        document.getElementById("demo18").innerHTML = text;

        function myFunc() { 
            var sidebarContent = document.getElementById("sidebar"); 
            sidebarContent.classList.toggle("active");
            return false; 
        }
}