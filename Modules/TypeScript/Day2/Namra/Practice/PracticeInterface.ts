interface LabeledValue {
    label: string;
}

function printLabel1(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj10 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj10);

// optional interface
interface SquareConfig {
    color?: string;
    width?: number;
}
// to set default values
function createSquare10(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare11 = createSquare10({ color: "black" });


// Readonly interface
interface Point {
    readonly x: number;
    readonly y: number;
}

let p11: Point = { x: 10, y: 20 };
//p1.x = 5; // error! can not be accessed

//Excess property checks

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare12(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}

let mySquare13 = createSquare10({ colour: "red", width: 100 } as SquareConfig);
console.log(`${mySquare11.color}  ${mySquare11.area}`);

// Indexable Array
interface StringArray {
    [index: number]: string;
}

let myArray10: StringArray;
myArray10 = ["Bob", "Fred"];

let myStr1: string = myArray10[0];
console.log(myStr1);

// Function Types

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch1: SearchFunc;
// ways to define func
mySearch1 = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
  };
mySearch1 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};
mySearch1 = function (src, sub) {
    let result = src.search(sub);
    return result > -1; // return 'sdsd' will not allowed as return type is boolean
};