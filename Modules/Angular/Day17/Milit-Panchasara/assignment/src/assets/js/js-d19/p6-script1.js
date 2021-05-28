//closer allows to use inner function before executing it. We can use the variables of outer function and we can call inner function directly, without executing whole outer function.

function myClosure() {
    var counter = 0;
    return function() {
        counter++;
        console.log(counter);
    }
}

var timer = myClosure();

timer();
timer();
timer();
timer();
timer();