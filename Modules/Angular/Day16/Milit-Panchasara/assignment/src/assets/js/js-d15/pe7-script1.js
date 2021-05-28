function checkData(){
    var num1 = document.getElementById('number1').value;

    if(num1 == "") {
        alert("Please enter any numeric value");
    }
    else if(isNaN(parseInt(num1))) {
        alert('Only numeric values are allowed. Please re-enter the value');
    }
    else {
        alert("Entered value is a numeric value");
        document.getElementById('myForm').submit();
    }
}

function changed(num){
    console.log("value of number" + num + " changed");
}