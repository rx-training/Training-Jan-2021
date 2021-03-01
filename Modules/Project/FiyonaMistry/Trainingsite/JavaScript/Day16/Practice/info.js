// 1. String blank or not
str_blank = function(input){
    if(input.length === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(str_blank(""));
console.log(str_blank("String"));

// 2. Split a string and convert it into array
var str = "This is a string";
var arr = str.split(" ");
console.log("String into array : " + arr);

// 3. extract a specified number of characters from a string
var ch = str.substr(5,8);
console.log("Characters from a string : " + ch);

// 4. get the current date
console.log("Current Date : " + Date());

// 5. push, pop, shifting, deleting element
arr_push = arr.push("array");
console.log("Push : "+ arr);
arr_pop = arr.pop();
console.log("Pop : " + arr);
arr_shift = arr.shift();
console.log("Shift : " + arr);
arr_unshift = arr.unshift("This");
console.log("Unshift : "+ arr);