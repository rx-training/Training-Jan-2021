export function array(){
    var fruits = ["Apple", "Mango", "Banana", "Kiwi"];
        document.getElementById("demo1").innerHTML = "toString: " + fruits.toString();

        var fruits = ["Apple", "Mango", "Banana", "Kiwi"];
        document.getElementById("demo2").innerHTML = "join: " + fruits.join(" # ");

        document.getElementById("demo3").innerHTML = "Popped Item: " + fruits.pop();
        document.getElementById("demo4").innerHTML = "pop: " + fruits.toString();

        document.getElementById("demo5").innerHTML = "Pushed Item Index: " + fruits.push("Orange");
        document.getElementById("demo6").innerHTML = "push: " + fruits.toString();

        document.getElementById("demo7").innerHTML = "Shifted Item: " + fruits.shift();
        document.getElementById("demo8").innerHTML = "Shift: " + fruits.toString();

        document.getElementById("demo9").innerHTML = "Unshifted Item Index: " + fruits.unshift("Pear");
        document.getElementById("demo10").innerHTML = "unshift: " + fruits.toString();

        document.getElementById("demo31").innerHTML = "Deleted Item: " + delete fruits[0];
        document.getElementById("demo32").innerHTML = "Delete: " + fruits.toString();

        fruits.splice(2, 0, "Lemon", "Kiwi");
        document.getElementById("demo11").innerHTML = "splice: " + fruits;

        var vegetables = ["Potato", "Tomato", "Brinjal"];
        var concatResult = vegetables.concat(fruits)
        document.getElementById("demo12").innerHTML = "Concat: " + concatResult;

        var newFruits = fruits.slice(2);
        document.getElementById("demo13").innerHTML = "Slice: " + newFruits;

        var newFruits = concatResult.slice(2,4);
        document.getElementById("demo14").innerHTML = "Slice: " + newFruits;

        var concatSort = concatResult.sort();
        document.getElementById("demo15").innerHTML = "Sort: " + concatSort;

        var concatReverse = concatResult.reverse();
        document.getElementById("demo16").innerHTML = "Reverse: " + concatReverse;

        var points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b});
        document.getElementById("demo17").innerHTML = "Ascending order: " + points;

        points.sort(function(a, b){return b - a});
        document.getElementById("demo18").innerHTML = "Descending order: " + points;

        points.sort(function(a, b){return 0.5 - Math.random()});
        document.getElementById("demo19").innerHTML = "Random order: " + points;

        var maxNum = Math.max.apply(null, points);
        document.getElementById("demo20").innerHTML = "Maximum No.: " + maxNum;

        var minNum = Math.min.apply(null, points);
        document.getElementById("demo21").innerHTML = "Minimum No.: " + minNum;

        var txt = "";
        points.forEach(myFunction);
        document.getElementById("demo22").innerHTML = "ForEach: " + txt;
        function myFunction(value) {
            txt = txt + value + "<br>"; 
        }

        var numbers2 = points.map(myFunctio);
        document.getElementById("demo23").innerHTML = "Map: " + numbers2;
        function myFunctio(value) {
            return value * 2;
        }

        var over18 = points.filter(myFuncti);
        document.getElementById("demo24").innerHTML = "Over18: " + over18;
        function myFuncti(value) {
            return value > 18;
        }

        var sum = points.reduce(myFunct);
        document.getElementById("demo25").innerHTML = "The sum is " + sum;
        function myFunct(total, value) {
            return total + value;
        }

        var allOver18 = points.every(myAgeFunc);
        document.getElementById("demo26").innerHTML = "All over 18 is " + allOver18;
        function myAgeFunc(value) {
            return value > 18;
        }

        var someOver18 = points.some(myFun);
        document.getElementById("demo27").innerHTML = "Some over 18 is " + someOver18;
        function myFun(value) {
            return value > 18;
        }

        document.getElementById("demo28").innerHTML = "Current array of concat result: " + concatResult;
        document.getElementById("demo29").innerHTML = "Index of Orange in Concat result: " + concatResult.indexOf("Orange");

        var first = points.find(myFindFunc);
        var index = points.findIndex(myFindFunc);
        document.getElementById("demo30").innerHTML = "First number over 18 is " + first + " at position " + index;
        function myFindFunc(value) {
            return value > 18;
        }

        function myFunc() { 
            var sidebarContent = document.getElementById("sidebar"); 
            sidebarContent.classList.toggle("active");
            return false; 
        }
}