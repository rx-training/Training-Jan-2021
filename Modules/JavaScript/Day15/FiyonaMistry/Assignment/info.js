// Don't know why the result is vanishing
function cal(){
    var first = parseInt(document.getElementById('first').value);
    var second = parseInt(document.getElementById('second').value);
    var add = document.getElementById('add');
    var sub = document.getElementById('sub');
    var multiply = document.getElementById('multiply');
    var divide = document.getElementById('divide');
    var result = 0;
    if(add.checked){
        result = first + second;
        document.getElementById('result').innerHTML = result;
    }
    else if(sub.checked){
        result = first - second;
        document.getElementById('result').innerHTML = result;
    }
    else if(multiply.checked){
        result = first * second;
        document.getElementById('result').innerHTML = result;
    }
    else if(divide.checked){
        result = first + second;
        document.getElementById('result').innerHTML = result;
    }
}