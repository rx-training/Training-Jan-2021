interface IItems
{
    ItemID : number;
    ItemName : string;
    ItemQuantity : number;
}
class Purchases implements IItems
{
    ItemID : number;
    ItemName : string;
    ItemQuantity : number;
    constructor(ItemID : number,ItemName: string,ItemQuantity:number)
    {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
        
    }    
}
class Inventories implements IItems ,Purchases,Orders
{
    ItemID : number;
    ItemName : string;
    ItemQuantity : number;
    constructor(ItemID : number,ItemName: string,ItemQuantity:number)
    {
        this.ItemID = ItemID;
         this.ItemName = ItemName;
         this.ItemQuantity = ItemQuantity;
    }
}
class Orders implements IItems
{
    ItemID : number;
    ItemName : string;
    ItemQuantity : number;
    constructor(ItemID : number,ItemName: string,ItemQuantity:number)
    {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;    
    }
}
var purchase=[new Purchases(1,"Pen",16),new Purchases(2,"Book",10),new Purchases(3,"Pencile",20)];
var order=[new Orders(1,"Pen",20),new Orders(2,"Book",20),new Orders(3,"Pencile",50)];
var Inventory12;
var reorder;
var item12: Purchases[]=[];
var qty;
var id;
var iname;
console.log("Items purchased is:");
console.log(purchase);
for(var i of purchase)
{
    for(var j of order)
    {
        if(i.ItemID == j.ItemID)
        { 
            Inventory12 = {"ItemID" : i.ItemID,"ItemName" : i.ItemName,"ItemQuantity":j.ItemQuantity-i.ItemQuantity};
            item12.push(Inventory12);
            qty = Inventory12.ItemQuantity;
            id = Inventory12.ItemID;
            iname= Inventory12.ItemName;
        }       
    }
            if(qty<5)
            {
                reorder = [new Orders(id,iname,qty+5)];
                console.log("Items Ordered sucessfully");
                console.log(reorder);
            }
}
console.log("Items in inventory is:");
console.log(item12);