var age = 21;
console.log(age);
var Name = "ABCDEFG";
console.log(Name);
var first = 1232341.23232;
var second = 0X37CF; //hexaDecimal
var third = 255; //octal
var fourth = 57; //Binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(first.toExponential(2));
console.log(first.toFixed(5));
console.log(first.toPrecision(3));
console.log("hello number is string " + first.toString());
var unsued;
console.log(unsued); //by default it is undefined You can define it to null also
function Hello() {
    //  alert("no return type function")
}
console.log(Hello());
var firstname = "Tirth";
var Lastname = "Patel";
console.log("Full name is :" + (firstname + " " + Lastname));
var sentence = "  this is new sentence of the period  ...  ";
var secondsent = "hello from typescripts";
console.log(sentence.charAt(6));
console.log(sentence.concat(secondsent));
console.log(sentence.replace("sentence", "String"));
var split = sentence.split(" ");
console.log(split);
console.log(sentence.trim());
//NUll
var num = null;
var num2;
console.log(num + " " + num2);
//any
//super type of all data types
var identifier = val;
var val = "hei";
console.log(val);
val = 123;
console.log(val);
function printval(x, y) {
    console.log(x + y);
}
printval("Hello", "any ");
printval(12, 10);
//multi type array
var multi = ['Apple', 'orange', 6, 'banana', 12];
for (var index in multi) {
    console.log(multi[index]);
}
//use for of loop
for (var _i = 0, multi_1 = multi; _i < multi_1.length; _i++) {
    var value = multi_1[_i];
    console.log(value);
}
var fruits = ['A', 'Orange', 'banana'];
console.log(fruits.pop());
fruits.push('apple');
console.log(fruits);
var newArray = fruits.filter(function (fruits, i, arr) {
    return fruits.length < 2;
});
console.log(newArray);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["newsLetter"] = 1] = "newsLetter";
    PrintMedia[PrintMedia["Internet"] = 2] = "Internet"; //2
})(PrintMedia || (PrintMedia = {}));
//enum as return type
function getMedia(medianame) {
    if (medianame == 'forbes' || medianame == 'Outlook') {
        return PrintMedia.Internet;
    }
}
var mediatype = getMedia('forbes'); //reeturs 2
console.log(mediatype);
console.log(PrintMedia['newsLetter']);
var books = [{ title: "ABcd", Author: "xyz", Availible: false },
    { title: "ABcd2", Author: "xyz2", Availible: true }];
console.log(books[0].title);
