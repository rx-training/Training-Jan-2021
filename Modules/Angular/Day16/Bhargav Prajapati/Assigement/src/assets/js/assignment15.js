
    function calculate() {
        var number1 = parseInt(document.getElementById('num1').value);
        var number2 = parseInt(document.getElementById('num2').value);
        var addition = document.getElementById('add');
        var subtraction = document.getElementById('sub');
        var multiplication = document.getElementById('mul');
        var division = document.getElementById('div');
        var result;
        if (addition.checked) {

            document.getElementById("result").innerHTML = "Addition Of Two Number Is =  " + (number1 + number2)
        }

        if (subtraction.checked) {

            document.getElementById("result").innerHTML = "Subtraction Of Two Number Is =  " + (number1 - number2)
        }

        if (multiplication.checked) {

            document.getElementById("result").innerHTML = "Multiplication Of Two Number Is =   " + (number1 * number2)
        }
        if (division.checked) {

            document.getElementById("result").innerHTML = "Division Of Two Number Is = " + parseFloat((number1 / number2))
        }

    }
    function Reset()
    {
        document.getElementById("result").innerHTML="";
    }

