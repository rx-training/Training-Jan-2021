function calculate() {
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    if (num1 == "" || num2 == "") {
        alert("Please Insert Both Number");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (true) {
        case document.getElementById('sum').checked == true:
            var ans = num1 + num2;
            break;
        
        case document.getElementById('sub').checked == true:
            var ans = num1 - num2;
            break;

        case document.getElementById('mul').checked == true:
            var ans = num1 * num2;
            break;

        case document.getElementById('div').checked == true:
            var ans = (num1 / num2);
            break;
    
        default:
            break;
    }
    document.getElementById('result').innerHTML = ans;
}

function reset(){
    document.getElementById('number1').value=null;
                document.getElementById('number2').value=null;
                document.getElementById('sum').checked=false;
                document.getElementById('sub').checked=false;
                document.getElementById('mul').checked=false;
                document.getElementById('div').checked=false;
                document.getElementById('result').innerHTML="";
  }