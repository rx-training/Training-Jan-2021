//union type
function printSomething(input) {
    console.log(input);
    if (typeof input == "string") { // narrowing union type
        input.toUpperCase();
    }
}
printSomething(1);
printSomething("str");
// need to initialize
var p = { x: 2, y: 2 };
p.x = 1;
p.y = 12;
console.log(p);
var s1 = {
    name: "s1",
    standard: 12,
    address: "Rajkot"
};
console.log(s1);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
console.log(Direction.Down);
function optparam(x) {
    console.log(x);
}
optparam();
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
myForEach([1, 2, 3], function (a, i) { return console.log(a, i); });
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x, p.x, 'xaxa');
