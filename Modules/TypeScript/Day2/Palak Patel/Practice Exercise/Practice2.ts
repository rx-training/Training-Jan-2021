enum color{
    red,
    blue,
    green
}

class shape {
    type : string;
    constructor(theType:string){
        this.type=theType;
    }
    display(){
        console.log(`This shape is ${color.red} colored ${this.type}`);
    }
}

var shape1 = new shape("square");
shape1.display();

interface bird{
    fly():void;
    layEggs():void;
}

interface Fish{
    swim():void;
    layEggs():void;
}

declare function getSmallPet(): Fish | bird;

var pet = getSmallPet();
pet.layEggs(); // can't call swim or fly function because getSmallPet is either of Fish type or bird type

declare function getBoth(): Fish & bird;
let pets = getBoth(); // can call all the functions of bird and Fish
pets.fly();
pets.swim();