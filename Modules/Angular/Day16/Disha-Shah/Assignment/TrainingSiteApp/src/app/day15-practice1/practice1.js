export function practice(){
    var num1 = parseInt(prompt("Enter Number 1: "));
    var num2 = parseInt(prompt("Enter Number 2: "));
    var num3 = parseInt(prompt("Enter Number 3: "));
    var arraySum = [num1, num2, num3];
    var arrayLen = arraySum.length;
    var max = -Infinity;
    var total = 0;
    var maxNumResult = findMaxNum();
    var sum = findSumGreater();

    function findMaxNum() {
        var i = 0;
        for (i; i<arrayLen; i++) {
            if ( max < arraySum[i] ) {
                max = arraySum[i];
            }
        }
        return max;
    }

    function findSumGreater() {
        var i = 0;
        for (i; i<arrayLen; i++) {
            if (arraySum[i] > 40) {
                total += arraySum[i];
            }
        }
        return total;
    }

    document.getElementById("demo1").innerHTML = "Maximum number is: " + maxNumResult;

    document.getElementById("demo2").innerHTML = "<br><br>Sum of Given numbers is: " + sum;

}