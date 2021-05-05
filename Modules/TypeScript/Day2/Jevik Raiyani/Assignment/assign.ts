interface IRetailShop{
    InventoryId : number;
    InventoryName : string;
    InventoryQuantity : number;
    InventoryPrice : number;
}

var obj : IRetailShop[] =
                [{ InventoryId :1,InventoryName:"A",InventoryQuantity :9,InventoryPrice:1235},
                { InventoryId :2,InventoryName:"P",InventoryQuantity :15,InventoryPrice:456}];



class RetailShop {

    AvaliableRecord(){
        for (const val of obj) {
             console.log( `Id is ${val.InventoryId}, Name is ${val.InventoryName}, Quantity is ${val.InventoryQuantity}, Price is ${val.InventoryPrice} `);
   
        }
    }
    Purchase(id:number,qty:number){
        var data = obj.filter(x=>x.InventoryId==id);
        if(qty<5){
            console.log("Qty Atleast 5");
        }
        else{
            if(data[0]==null){
            console.log("Return Valid Id");
            }
            else if(data[0].InventoryQuantity - qty >= 0){
               obj[obj.indexOf(data[0])].InventoryQuantity -= qty;
               console.log("Purchase is SuccessFull");
            }
            else{
                console.log("Not enough Qty Available");
            }
        }
    }
}

let x = new RetailShop();
x.AvaliableRecord();
x.Purchase(1,5);
x.AvaliableRecord();
x.Purchase(1,5);
x.AvaliableRecord();
x.Purchase(1,4);
x.AvaliableRecord();
x.Purchase(3,6);
x.AvaliableRecord();
