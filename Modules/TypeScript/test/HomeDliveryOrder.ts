import { ICustomer } from './HomeDeliveryCustomers';
import {IFoodItems } from './FoodItems';
interface IOrders extends ICustomer,IFoodItems
{
    CustomerID : number;
    CustomerName : string;
    Quantity :number;
    CurrentOrderDateTime : Date;
    OrderDateTime : Date;
}
class Orders implements IOrders
{
    CustomerID : number;
    CustomerName : string;
    FoodID : number;
    FoodName : string;
    Price : number;
    Quantity :number;
    CurrentOrderDateTime : Date;
    OrderDateTime : Date;
    TypeOfFood : string
    constructor(CustomerID : number,CustomerName : string,FoodID : number,FoodName : string,Price : number,Quantity :number,CurrentOrderDateTime : Date,OrderDateTime : Date,TypeOfFood : string)
    {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.FoodID = FoodID;
        this.FoodName = FoodName;
        this.Price = Price;
        this.Quantity = Quantity;
        this.CurrentOrderDateTime = CurrentOrderDateTime;
        this.OrderDateTime = OrderDateTime;
        this.TypeOfFood = TypeOfFood;
    }
}
export var order = [new Orders(1,"Bina",1,"Pizza",110,1,new Date(2021,5,7,3,4,5,6),new Date(2021,4,7,3,4,5,6),"Non-Vegetarian")];
export var HomeOrder;
for(var i of order)
{
    if(i.CustomerID == 1)
    {
        HomeOrder = i;
    }
}