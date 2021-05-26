function goToNumeric(pageId){
    var num1 = document.getElementById('number1').value;

    if(num1 == "") {
        alert("Please enter any numeric value");
    }
    else if(isNaN(parseInt(num1))) {
        alert('Only numeric values are allowed. Please re-enter the value');
    }
    else {
        alert("Entered value is a numeric value");
        if(pageId == 1) {
            document.getElementById('myForm').action = '/javascript/day15/practice-extra4';
        }
        else{
            document.getElementById('myForm').action = '/javascript/day15/practice-extra5';
        }
        document.getElementById('myForm').submit();
    }
}