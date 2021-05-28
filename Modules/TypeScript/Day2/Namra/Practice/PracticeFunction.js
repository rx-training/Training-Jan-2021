//Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
// Writing the function type
var myAdd1 = function (x, y) {
    return x + y;
};
//Inferring the types
var myAdd2 = function (x, y) {
    return x + y;
};
// Optional & default Parameter
function myAdd3(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
function myAdd4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
//Rest Parameter
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// This and Arrow function
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
