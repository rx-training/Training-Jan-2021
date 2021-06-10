import {Cusotmer} from "./Interface/ICustomer"

var Customerdata :any= [
    {Customer_ID:1,Customer_Name:'Raj manot',Customer_Phoneno:'92785465045',Customer_Address:'Niraml nager,Bhavnager'},
    {ProdId:2,Customer_Name:'mohini ',Customer_Phoneno:'85448265045',Customer_Address:'Kaluyabazar ,Bhavnager'},
    {ProdId:3,Customer_Name:'Priya manot',Customer_Phoneno:'74478546545',Customer_Address:'Hijmalina,Bhavnager'},
    ];
    export class Customers implements Cusotmer{
        Customer_ID:number;
        Customer_Name:string;
        Customer_Phoneno:string;
        Customer_Address:string;
        constructor(Customer_Name:string,Customer_Phoneno:string,Customer_Address:string){
            this.Customer_Name=Customer_Name;
            this.Customer_Phoneno=Customer_Phoneno;
            this.Customer_Address=Customer_Address;        
        
        };

        // new product add inventory
        insertproduct(){
            let prodavaliable = 0;
            var newproduct:any={Customer_ID:Customerdata.length+1,Customer_Name:this.Customer_Name,Customer_Phoneno:this.Customer_Phoneno,Customer_Address:this.Customer_Address}
            
                Customerdata.push(newproduct);
        }
        showall(){
            console.log("-----------------------------------------");
            for(var cus of Customerdata){
                console.log(Customerdata);
            }
            
            console.log("-----------------------------------------");
        }
    }   
