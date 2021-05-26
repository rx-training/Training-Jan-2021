function practice1(callBack){
    var num = document.getElementById('num1').value;
    num = callBack(num); //call back will call function defined on line 16
    console.log(num);
    return false;
}