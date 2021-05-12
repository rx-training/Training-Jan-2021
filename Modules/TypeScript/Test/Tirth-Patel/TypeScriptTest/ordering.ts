import { Item, VegItems ,NonVegItems , wholemenuItems} from "./Menu";

interface order{
    CustomerId:number;
    items:Array<number>;
    Time?:number;
    OrderId?:number;
    BillAmount:number;
    
}

export class Orders implements order{
    
    constructor(public OrderId:number, public items:Array<number>, public CustomerId:number,public Time:number,public BillAmount:number=0){}

   CreateOrder(param:order){
    let flag :boolean;
    //cheking if item id is correct or not!
    //if its correct then add that price to bill amount
  

    for(var id of this.items){
        for( let items of wholemenuItems){
            if(id == items.ItemId){
                this.BillAmount +=items.ItemPrice;
                items.ItemQnty --;
                flag =true;
            }
            
        }
    }
       
    
    if(flag== true){
        param.Time = 45;//hard coded delivery time
        param.OrderId =Math. floor(Math. random() * 100) + 1;
        param.BillAmount = this.BillAmount;
        ListoFOrder.push(param);
        console.log(`Order Accepted`);
       
    }
    else{
        console.log(`one of the Item not Availible`);
    }
       
   }
 
}
export var ListoFOrder :order[]=[];

