interface Inventory{
    ID: number;
    Name:string;
    Price:number;
    Quantity:number;
}

class Product implements Inventory{
    ID: number;
    Name:string;
    Price:number;
    Quantity:number;
    Expiry?:Date;
    private origenalQuant:number = 0

    constructor(id:number,name:string,price:number,quant:number,expiry?:Date){
        this.ID =  id;
        this.Name=name;
        this.Price=price;
        this.Quantity=quant;
        this.Expiry=expiry;
        this.origenalQuant=quant;
    }

    private reorderRequest(){
        this.Quantity=this.Quantity+this.origenalQuant;
        console.log(`${this.Name} has been restocked. Current Quantity is ${this.Quantity}`);
    }

    order(q:number){
        if(q>this.Quantity){
            console.log(`You cannot place more than ${this.Quantity} items`);
        }else{
            this.Quantity=this.Quantity-q;
            console.log(`Order for ${this.Name} has placed successfully`);
            if(this.Quantity<5){
                this.reorderRequest();
            }
        }
    }        
}

var Cheese = new Product(1,"Cheese",99,20);
var Milk = new Product(2,"Milk",26,30);
var Eggs = new Product(3,"Eggs",10,50);


Cheese.order(2);
Milk.order(5);
Eggs.order(10);
Cheese.order(19);
// function order(orderList:string):Array<string>{
//     var OrderList = orderList.split(',');
//     return OrderList;
// }

// var Orders = order("Cheese,Milk,Eggs");
// for (var o of Orders){
//     o.order();
// }
