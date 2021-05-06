function Add(x:number ,y:number):number 
{return x+y;
    
}
console.log(Add(10,20));

let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

//optional and default parameter
function buildName(fname:string,lname?:string){
    console.log(fname +" " +lname);
}
buildName("tirth","patel");
buildName("fnameOnly")
//default paramter

//required parameter always has to be preceed the defalut or optional or default optinal paramter
function buildNames(fname:string,lname=" "){
    console.log(fname +" " +lname);
}
buildNames("tirth","patel");
buildNames("fnameOnly")
buildNames("fname",undefined);
//rest parameters

function restName(fname:string ,...restofName:string[]){
    console.log(fname+" " +restofName.join(""));
}
restName("tirth", "pa" ,"te", "l");
//arrwo function

interface Card {
    suit: string;
    card: number;
  }
  
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
let deck :Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this:Deck) {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };
  
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  
  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

  //fucntion overload
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(("card: " + pickedCard1.card + " of " + pickedCard1.suit));

let pickedCard2 = pickCard(15);
console.log(("card: " + pickedCard2.card + " of " + pickedCard2.suit));