var n1 = 10;
var n2 = 20;
console.log(n1 + n2);
result.innerHTML = 'result is' + (n1 + n2);
console.log('hello');
document.getElementById('result').style.backgroundColor = 'green'
function check() {
    var string1 = prompt('enter string');

    if (!!string1) {
        document.getElementById('result1').innerHTML = 'String is NOT empty'
    }
    else {
        document.getElementById('result1').innerHTML = 'string is Empty';
    }


}
function getdate() {
    var date = new Date();
    alert("today's date is " + date);
}
function checkdate() {
    var date = document.getElementById("checkdates").value;
    console.log(date);
    var string = date.toString();
    console.log(string);

}
var str1 = "hello my name is xyz'";
console.log(str1);

document.getElementById('r2').innerHTML = 'before split"' + str1;
var str2 = str1.split(" ");
document.getElementById('r1').innerHTML = 'split called :"' + str2;

document.getElementById('r3').innerHTML = 'slicing 0 to 7 elements from string';

var str3 = str1.slice(0, 7);
document.getElementById('r4').style.backgroundColor = '2px solid red'.innerHTML = 'slice called :"' + str3;
var date = new Date();
console.log(date);

var list = ["1:one,2:two,3:three,4:four"]
list.push('pushed');
console.log(list)
list.push('poped');
console.log(list)
list.pop();
console.log(list);

var list = [1, 2, 3, 4, 5];

var shift1 = list.shift();
console.log(shift1)
console.log(list);
list.unshift(1);

console.log(list);
var strings = list.toString();
console.log(strings);

list.push(6);
console.log(list);
list.pop();
console.log(list);

list.splice(2, 0, "splice1", "splice2")
console.log(list);
list.splice(1, 4, 'splice1', 'splice2')
console.log(list);
var list1 = ['hello'];
var list2 = [' how ', ' are   you?'];
var list3 = list1 + list2;
console.log(list3);
var list4 = list3.slice(1, 5);
console.log(list4);

