import {OrdeData} from  "./index";

var Country = [];

export class OrderData{
    name :string;
    AddressLine1:string;
    city : string;
    country :string;

    constructor(name:string,add:string,city:string,country:string){
        this.name=name;
        this.AddressLine1=add;
        this.city=city;
        this.country=country;
    }

    GetMenu(){
        for (const val of OrdeData) {
            console.log(val);
        }
    }

    OrderItemById(id:number){
        console.log("you Ordered & Bill");
        console.log( OrdeData.filter(x=>x.id==id));
        console.log(`${this.name},  ${this.AddressLine1}, ${this.city}, ${this.country}`);
        
    }

}