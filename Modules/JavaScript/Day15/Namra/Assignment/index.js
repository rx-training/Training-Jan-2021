function calculateOperation() {
    var form1 = document.getElementById('form1');
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var operation = form1.elements["operation"].value;
    var ans;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Enter Only Numeric Values");
        return false;
    }
    switch (operation) {
        case "add": ans = num1 + num2;
            break;

        case "sub": ans = num1 - num2;
            break;

        case "mul": ans = num1 * num2;
            break;

        case "div": ans = num1 / num2;
            break;

    }
    document.getElementById('resultForm1').innerText += " " + ans;
    return false;
}
function calculateOperation1() {
    var form1 = document.getElementById('form1');
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var operation = form1.elements["operation1"].value;
    var ans;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Enter Only Numeric Values");
        return false;
    }
    switch (operation) {
        case "add": ans = num1 + num2;
            break;

        case "sub": ans = num1 - num2;
            break;

        case "mul": ans = num1 * num2;
            break;

        case "div": ans = num1 / num2;
            break;

    }
    document.getElementById('resultForm1').innerText += " " + ans;
    return false;
}

function resetForm1(){
    document.getElementById('resultForm1').innerText = "Result is :";
}