interface IInventory
{
     ItemId:number;
     ItemName:string;
     ItemPrice:number;
     ItemQuantity:number;
}

var obj:IInventory[]=
[
    {ItemId:3,ItemName:"IceCream",ItemPrice:50,ItemQuantity:150},
    {ItemId:1,ItemName:"Cake",ItemPrice:150,ItemQuantity:4},
    {ItemId:2,ItemName:"Pizza",ItemPrice:500,ItemQuantity:35},
    {ItemId:4,ItemName:"Burger",ItemPrice:75,ItemQuantity:780},
]


class Inventory 
{
    

     Display():void
     {

        for (var data of obj)
         {
             console.log(`ItemId :-${data.ItemId} `);
             console.log(`ItemName :- ${data.ItemName}`);
             console.log(`ItemPrice :- ${data.ItemPrice}`);
             console.log(`ItemQuantity :- ${data.ItemQuantity}`);
             console.log("==============================================");            
         }
        
   }
   
   BuyProduct(Id:number,Qnt:number):void
   {
    

    var Qt=obj.filter(obj=>obj.ItemId==Id)[0];    
       if(Qt.ItemQuantity<5 )
       {
           console.log(`Reorder The ${Qt.ItemName} Item`);
           
       }
       else
       {
            var idx=obj.indexOf(Qt);
             obj[idx].ItemQuantity=obj[idx].ItemQuantity-Qnt; 
             console.log("Successsfully Purches Product");    
       }
   }  
}



console.log("=========================Before Any Quantity Deducted =================================");
var Inven=new Inventory();
Inven.Display();


console.log("=========================After Any Quantity Deducted==================================");
Inven.BuyProduct(3,2); 
Inven.Display();
 

 console.log("=======================Quantity is LessThen 5=====================");
 Inven.BuyProduct(1,4);
 

