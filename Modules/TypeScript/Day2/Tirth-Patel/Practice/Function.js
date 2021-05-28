function Add(x, y) {
    return x + y;
}
console.log(Add(10, 20));
var myAdd = function (x, y) {
    return x + y;
};
//optional and default parameter
function buildName(fname, lname) {
    console.log(fname + " " + lname);
}
buildName("tirth", "patel");
buildName("fnameOnly");
//default paramter
//required parameter always has to be preceed the defalut or optional or default optinal paramter
function buildNames(fname, lname) {
    if (lname === void 0) { lname = " "; }
    console.log(fname + " " + lname);
}
buildNames("tirth", "patel");
buildNames("fnameOnly");
buildNames("fname", undefined);
//rest parameters
function restName(fname) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    console.log(fname + " " + restofName.join(""));
}
restName("tirth", "pa", "te", "l");
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
//fucntion overload
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log(("card: " + pickedCard1.card + " of " + pickedCard1.suit));
var pickedCard2 = pickCard(15);
console.log(("card: " + pickedCard2.card + " of " + pickedCard2.suit));
