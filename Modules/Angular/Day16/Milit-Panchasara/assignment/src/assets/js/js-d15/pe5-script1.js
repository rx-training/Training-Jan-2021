function checkData(){
    var num1 = document.getElementById('number1').value;
    regex1 = new RegExp(parseInt(num1),"i");

    if(num1 == "") {
        alert("Please enter any numeric value");
        return false;
    }
    else if(num1.match(regex1) == null) {
        alert('Only numeric values are allowed. Please re-enter the value');
        return false;
    }
    else {
        alert("Entered value is a numeric value");
        return true;
    }
}

function changed(num){
    console.log("value of number" + num + " changed");
}