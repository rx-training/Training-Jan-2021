interface IRetailShop{
    InventoryId : number;
    InventoryName : string;
    InventoryQuantity : number;
    InventoryPrice : number;

    AvaliableRecord();
    Purchase(id : number,qty:Number);
}

class RetailShop implements IRetailShop{
    InventoryId:number;
    InventoryName:string;
    InventoryQuantity:number;
    InventoryPrice:number;
    
    

    constructor(id:number,name:string,qty:number,price:number){
        this.InventoryId = id;
        this.InventoryName = name;
        this.InventoryQuantity = qty;
        this.InventoryPrice = price;
    }

    AvaliableRecord(){
        return `Id is ${this.InventoryId}, Name is ${this.InventoryName}, Quantity is ${this.InventoryQuantity}, Price is ${this.InventoryPrice} `
    }

    Purchase(id:number,qty : number ) {
        if(this.InventoryId = id){
            if(qty > 4 ){
                if(this.InventoryQuantity>4 ){
                this.InventoryQuantity = this.InventoryQuantity -qty;
                return `Order is Success full, OrderID is ${id} order Qty is ${qty} `;
                }
                else {
                    return`not enough Qty`;
                }
            }
            else
            {
                return `Order Atleast of 5 Qty`;
            }          
        }
        else{
            `Enter valid ID`
        }
    }
} 

let shop = new RetailShop(1,"X",9,1235);
console.log( shop.AvaliableRecord());

console.log( shop.Purchase(1,6));
console.log( shop.AvaliableRecord());
console.log( shop.Purchase(1,6));
console.log( shop.AvaliableRecord());


let s = new RetailShop(2,"aa",7,120);
console.log( s.Purchase(2,5));
console.log(s.AvaliableRecord());
console.log( s.Purchase(2,3));
console.log(s.AvaliableRecord());


