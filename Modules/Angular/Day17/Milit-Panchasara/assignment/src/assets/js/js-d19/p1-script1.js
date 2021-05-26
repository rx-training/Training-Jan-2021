var area  = function (r) {
    return Math.PI * r * r;
}
function practice1(){
    var num = document.getElementById('num1').value;
    console.log(area(num).toFixed(2));
    return false;
}