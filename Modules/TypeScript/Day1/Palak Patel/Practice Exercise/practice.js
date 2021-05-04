var message = 'Hello My Name Is Palak Patel';
console.log(message.toUpperCase());
var fruits = "Apple,Banana,Orange,Grapes,Watermalon,Papaya";
var fruitArray = fruits.split(',');
for (var _i = 0, fruitArray_1 = fruitArray; _i < fruitArray_1.length; _i++) {
    var fruit = fruitArray_1[_i];
    console.log(fruit);
}
fruitArray.splice(2, 1, "Chikoo");
console.log(fruitArray);
