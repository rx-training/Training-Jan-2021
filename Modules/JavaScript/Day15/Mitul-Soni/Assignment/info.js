function getResult()
{
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var temp;
    if(num1 == "")
    {
        alert("Please Enter First Number");
    }
    else if(num2 == "")
    {
        alert("Please Enter Second Number");
    }
    else if(isNaN(num1) && isNaN(num2))
    {
        alert("Enter only Numeric Value");
    }
    else
    {
        if(document.getElementById("add").checked)
        {
            temp = parseFloat(num1) + parseFloat(num2);
            document.getElementById("result").innerHTML = "Result is : " + temp;
            
        }
        if(document.getElementById("sub").checked)
        {
            temp = num1 - num2;
            document.getElementById("result").innerHTML = "Result is : " + temp;
            
        }
        if(document.getElementById("mul").checked)
        {
            temp = num1 * num2;
            document.getElementById("result").innerHTML = "Result is : " + temp;
            
        }
        if(document.getElementById("div").checked)
        {
            temp = num1 / num2;
            document.getElementById("result").innerHTML = "Result is : " + temp;
            
        }
    }
}

function reset()
{
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
}