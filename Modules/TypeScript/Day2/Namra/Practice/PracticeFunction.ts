//Named function
function add(x: number, y: number): number {
    return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
    return x + y;
}

// Writing the function type
let myAdd1: (baseValue: number, incrementValue: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

//Inferring the types

let myAdd2: (baseValue: number, incrementValue: number) => number = function (
    x,
    y
): number {
    return x + y;
};

// Optional & default Parameter

function myAdd3(x: number, y?: number) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}

function myAdd4(x: number, y = 4) {
    return x + y;
}

//Rest Parameter
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
console.log(employeeName);

// This and Arrow function
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52); // math random will generate number between 0 and 1
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

