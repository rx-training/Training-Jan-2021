//Class example
class book{
    bookid:number;
    bookname:string;
    constructor(id:number,name:string){
        this.bookid= id;
        this.bookname=name;
    }
    Bookprice():number{
            return 1000;
    }
    
}
let z = 100;

function addToZ(x, y) {
  console.log(x + y + z);
}

let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
let note = new book(1,'Ramyan');
console.log(note.Bookprice());
//  Functions Example
console.log(myAdd(10,15));
addToZ(25,10);

