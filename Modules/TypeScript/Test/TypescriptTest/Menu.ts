import {newCustomers} from "./Customers";

export interface IMenu
{
    ItemId : number;
    ItemName : string;
    ItemPrice?: number;
    Quantity? : number;
}
export var order : Array<IMenu>= [
    {ItemId:1,ItemName:'a',Quantity : 10},
    {ItemId:2,ItemName:'b',Quantity : 10}
];
export var MenuArray : Array<IMenu>=[
    {ItemId:1,ItemName:'a',ItemPrice:100},
    {ItemId:2,ItemName:'b',ItemPrice:110},
    {ItemId:3,ItemName:'k',ItemPrice:120},
    {ItemId:4,ItemName:'h',ItemPrice:130},
    {ItemId:5,ItemName:'g',ItemPrice:100},
    {ItemId:6,ItemName:'d',ItemPrice:100},
    {ItemId:7,ItemName:'f',ItemPrice:200}   
];
export class Menu implements IMenu
{
    ItemId : number;
    ItemName : string;
    ItemPrice : number;

    PlaceOrder(order : any, CustomerId : number)
    {
        var price : number = 0;
        order.forEach(element => {
            for(var item of MenuArray)
            {
                if(item.ItemId == element.ItemId)
                {
                    price += item.ItemPrice * element.Quantity;
                }
            }
        });
        var address : string;
        newCustomers.forEach(element => {
            if(element.CustomerId == CustomerId)
            {
                address = element.CustomerAddress;
            }
        });

        return `Your final bill is ${price} and placed at ${address}`;
    }
}
// To know the bill
var mn = new Menu();
console.log(mn.PlaceOrder(order,1));