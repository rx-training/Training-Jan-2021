var max = 0;
var sum = 0;
function calculateAge() {
    var age1 = parseInt(prompt("Enter age 1:", "0"));
    var age2 = parseInt(prompt("Enter age 2:", "0"));
    var age3 = parseInt(prompt("Enter age 3:", "0"));
    if (age1 > age2) {
        if (age1 > age3) {
            max = age1;
        }
        else {
            max = age3;
        }
    }
    else {
        if (age2 > age3) {
            max = age2;
        }
        else {
            max = age3;
        }
    }
    if (age1 > 40) {
        sum += age1;
    }
    if (age2 > 40) {
        sum += age2;
    }
    if (age3 > 40) {
        sum += age3;
    }
    alert("maximum age is " + max + " and sum of age " + sum);
}