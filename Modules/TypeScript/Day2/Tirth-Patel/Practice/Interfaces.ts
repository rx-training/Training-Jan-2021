interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  //Interface with optional properties

  interface SqauareConfig{
      color?:string;
      width?:number;
  }
  function createSquare(config: SqauareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({ color: "black" });
  console.log(mySquare);

  //readonly properties

  interface Point{
      readonly x:number;
      readonly y:number;
  }
  var pl : Point = {x:10,y:20};
  //pl.x = 5;//cannot change after initialized

  //readonlyarray
  let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//You can not perfomr array opertioan on readonly array
a = ro as number[] //casting back to normal array

// //IMP  The easiest way to remember whether to use readonly or
//  const is to ask whether you’re using it on a variable or 
//  a property.
//  Variables use const whereas properties use readonly.

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  let squareOptions = { colour: "red", width: 100 };//colour is not pre defined prop

let mySquares = createSquare(squareOptions);

//Interface Function Types

interface SearchFunc{
    (source:string ,substrinng:string):boolean;
}