function calculate(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var num3 = document.getElementById('number3').value;
    if(num1 == "" || num2 == "" || num3 == "")
    {
        alert('Please insert all numbers');
        return;
    }
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    var maxNum = Math.max(num1, num2, num3);
    
    var sum = ((num1 > 40)?num1:0) + ((num2 > 40)?num2:0) + ((num3 > 40)?num3:0);

    document.getElementById('resultFromJS').innerHTML = 'Maximum Number is ' + maxNum + ' & <br>Sum of numbers greater than 40 is ' + sum;
}

function changed(num){
    console.log("value of number" + num + " changed");
}