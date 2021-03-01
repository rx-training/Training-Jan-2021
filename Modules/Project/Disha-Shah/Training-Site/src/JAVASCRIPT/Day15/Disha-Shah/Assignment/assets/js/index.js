function operation() {
    var ans = 0;
    if(document.getElementById("add").checked == true) {
        ans = calculate('add');
    }
    else if(document.getElementById("sub").checked == true) {
        ans = calculate('sub');
    }
    else if(document.getElementById("mul").checked == true) {
        ans = calculate('mul');
    }
    else if(document.getElementById("div").checked == true) {
        ans = calculate('div');
    }
    document.getElementById("answer").innerHTML = ans;

}

function calculate(calc) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result;
    switch(calc){
        case 'add' : result = num1 + num2;
                     break;
        case 'sub' : result = num1 - num2;
                     break;
        case 'mul' : result = num1 * num2;
                     break;
        case 'div' : result = (num1 / num2).toFixed(2);
                     break;
        default : break;
    }
    return result;
}

function reset() {
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("add").checked=false;
    document.getElementById("sub").checked=false;
    document.getElementById("mul").checked=false;
    document.getElementById("div").checked=false;
    document.getElementById("answer").innerHTML="";
}