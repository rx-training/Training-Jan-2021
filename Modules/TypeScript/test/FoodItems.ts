export interface IFoodItems 
{
    FoodID : number;
    FoodName : string;
    Price : number;
    TypeOfFood : string;
}
class FoodItems implements IFoodItems
{
    FoodID : number;
    FoodName : string;
    Price : number;
    TypeOfFood : string;
    constructor(FoodID : number,FoodName : string,Price : number,TypeOfFood : string)
    {
        this.FoodID = FoodID;
        this.FoodName = FoodName;
        this.Price = Price;
        this.TypeOfFood = TypeOfFood;
    }
}
export var FItem = [new FoodItems(1,"Pizza",110,"Non-Vegetarian"),new FoodItems(2,"Bhaji Pav",100,"Vegetarian")];
//Search 
export var VegFood;
for(var i of FItem)
{
    if(i.TypeOfFood == "Vegetarian")
    {
        VegFood = i;
    }
}
export var NonVegFood;
for(var i of FItem)
{
    if(i.TypeOfFood == "Non-Vegetarian")
    {
        NonVegFood = i;
    }
}