function pr1(arg) {
    return arg;
}
var temp1 = pr1(10);
console.log(temp1);
var temp2 = pr1('str');
console.log(temp2);
function pr2(arg) {
    return arg.length;
}
var x = ["x", "z", "y"];
var y = [1, 2, 3];
console.log(pr2(x));
console.log(pr2(y));
