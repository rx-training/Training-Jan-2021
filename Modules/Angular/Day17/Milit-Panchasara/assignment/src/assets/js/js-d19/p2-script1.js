var Area  = function (h, w) {
    this.result = h * w;
    return this.result;
}
function practice2(){
    var height = document.getElementById('num1').value;
    var width = document.getElementById('num2').value;
    let area = new Area(height, width);
    console.log(area);
    return false;
}