function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// to set default values
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
function createSquare1(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
var mySquare1 = createSquare1({ colour: "red", width: 100 });
console.log(mySquare1.color + "  " + mySquare1.area);
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var mySearch;
// ways to define func
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1; // return 'sdsd' will not allowed as return type is boolean
};
