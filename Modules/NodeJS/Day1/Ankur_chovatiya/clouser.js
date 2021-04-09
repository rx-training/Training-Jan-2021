var num2 = 2;
var sum = function () {
    var num1 = 1;
    return num1+ num2;
}
console.log(sum()); // 3


// ============

var sum = function(num1){
    return function(num2){
        return num1 + num2;
    }
}

console.dir(sum(2)) //coluser num = 2



// ============
var func = function(num1){
	return function(num2){
  	return num1 + num2;
  }
}

console.log(func(3)(5)) // 8