let message : string = 'Hello My Name Is Palak Patel';
console.log(message.toUpperCase());

let fruits : string = "Apple,Banana,Orange,Grapes,Watermalon,Papaya";
var fruitArray = fruits.split(',');
for (var fruit of fruitArray){
    console.log(fruit);
}

fruitArray.splice(2,1,"Chikoo");
console.log(fruitArray);

