interface KrishnaElectronic{
    ProdId:number;
    ProdName:string;
    Price:number;
    Prodque:number;
}
var Inventorys :any= [
    {ProdId:1,ProdName:'keybord',Price:270,Prodque:10},
    {ProdId:2,ProdName:'mouse',Price:150,Prodque:7},
    {ProdId:3,ProdName:'mousepad',Price:50,Prodque:12},
    {ProdId:4,ProdName:'moniter',Price:1270,Prodque:9}
    ];
    class Inventory implements KrishnaElectronic{
        ProdId:number;
        ProdName:string;
        Price:number;
        Prodque:number;
        constructor(ID:number,proname:string,price:number,quo:number){
            this.ProdId=ID;
            this.ProdName=proname;
            this.Price=price;
            this.Prodque=quo;        
        };

        // new product add inventory
        insertproduct(){
            let prodavaliable = 0;
            var newproduct:any={ProdId:this.ProdId,ProdName:this.ProdName,Price:this.Price,Prodque:this.Prodque}
            for(var newpro of Inventorys){
               if(newpro.ProdId == newproduct.ProdId || newpro.ProdName == newproduct.ProdName){
                    prodavaliable += 1;
               }      
            }
            if(prodavaliable==0){
                Inventorys.push(newproduct);
            }
        }   
    }

    class Manages implements KrishnaElectronic{
    ProdId:number;
    ProdName:string;
    Price:number;
    Prodque:number;

    //GET ALL Product 
    Showproducts(): any{
            console.log("----------------- Product -----------------"); 
            for(var product of Inventorys){
                
                console.log(`Product Name is "${product.ProdName}" and that price is "${product.Price}"`);
            }
            console.log("-------------------------------------------");
            return Inventorys;
        }

    Orderproducts(productname:string,quo : number):any{
        console.log("----------------- Order -----------------");
             for(var product of Inventorys){
                if(product.ProdName  == productname){
                
                if(product.Prodque>=quo){
                 var totalprice = product.Price*quo;
                    console.log(`Order is sucessfully ${totalprice}`);       
                    product.Quontity  = product.Prodque - quo;                   
                break;
                }
                else{
                    console.log(`---------------------Enter product is  higher quntity is ${quo} So enter lessthen this quontity ----------------------`);         
                    console.log(`Product Name is "${product.ProdName}" and that price is "${product.Price} and quontity is ${product.Prodque}"`);
                    break; 
                }
            }
            else{
                console.log("---------------------Enter product is not avalibale----------------------");         
             break;
                }
                //     console.log(`Product Name is "${product.ProdName}" and that price is "${product.Price}"`);
             }
             
        console.log("-------------------------------------------");
    }
}
var inven = new Inventory(5,"leptop",25000,7);
    inven.insertproduct();
var Manage = new Manages();
   Manage.Showproducts();
   Manage.Orderproducts("keybord",8);
   Manage.Showproducts();
   Manage.Orderproducts("keybord",2);
   Manage.Showproducts();