var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var shape = /** @class */ (function () {
    function shape(theType) {
        this.type = theType;
    }
    shape.prototype.display = function () {
        console.log("This shape is " + color.red + " colored " + this.type);
    };
    return shape;
}());
var shape1 = new shape("square");
shape1.display();
var pet = getSmallPet();
pet.layEggs(); // can't call swim or fly function because getSmallPet is either of Fish type or bird type
var pets = getBoth(); // can call all the functions of bird and Fish
pets.fly();
pets.swim();
