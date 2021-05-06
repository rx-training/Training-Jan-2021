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
// unioun 
var employee;
employee = [[1, 'niraj'], [2, 'najam'], [3, 'raj'], [4, 'Kajal'], [5, 'vijay']];
console.log(employee);
