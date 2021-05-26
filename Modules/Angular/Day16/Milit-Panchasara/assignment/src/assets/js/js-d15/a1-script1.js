function calculate(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    if(num1 == "" || num2 == "")
    {
        alert('Please insert both numbers');
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (true) {
        case document.getElementById('addition').checked == true:
            var result = num1 + num2;
            break;
        
        case document.getElementById('substraction').checked == true:
            var result = num1 - num2;
            break;

        case document.getElementById('multiplication').checked == true:
            var result = num1 * num2;
            break;

        case document.getElementById('division').checked == true:
            var result = (num1 / num2).toFixed(3);
            break;
    
        default:
            break;
    }

    document.getElementById('resultFromJS').innerHTML = result;
};

function reset() {
    document.getElementById('substraction').checked = false;
    document.getElementById('addition').checked = true;
    document.getElementById('multiplication').checked = false;
    document.getElementById('division').checked = false;
    document.getElementById('number1').value = null;
    document.getElementById('number2').value = null;
    document.getElementById('resultFromJS').innerHTML = "";
};