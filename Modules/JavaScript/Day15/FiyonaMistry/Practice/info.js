// First Practice
function myFunction(){
    var a = prompt("Enter 1st value:");
    var first = parseInt(a);
    var b = prompt("Enter 2nd value:");
    var second = parseInt(b);
    var c = prompt("Enter 3rd value:");
    var third = parseInt(c);
    var sum = 0;
    if(first > second && first > third){
        alert(first + " is the greatest");
    }
    else if(first < second && second > third){
        alert(second + " is the greatest");
    }
    else if(third > second && first < third){
        alert(third + "  is the greatest");
    }
    else{
        alert("Numbers are equal");
    }
    if(first > 40){
        sum += first;
    }
    if(second > 40){
        sum += second;
    }
    if(third > 40){
        sum += third;
    }
    alert("Sum of the numbers greater than 40 is : " + sum);
    return false;
}


// Second Practice
function mySecondFunction(){
    var arr = ["Ahmedabad", "Surat", "Rajkot", "Junagadh", "Vapi"];
    var final = [];
    var len = arr.length;
    for(var i = 0; i < len; i++){
        final += arr[i];
        final += ", ";
    }
    alert(final);
    return false;
}
