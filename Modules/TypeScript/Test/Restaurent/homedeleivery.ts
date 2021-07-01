import {IHomedelivery} from "./Interface/IHomedelivery"

var homedata :any= [
    {delevey_ID:1,fee:100,order:[1,2,5],price:1000}   ];

export class Homedel implements IHomedelivery{
    IHomedelivery_ID:number;
    IHomedelivery_chargefee:number;
    IHomedelivery_Order:any;
    IHomedelivery_TotalPrice:number;

    constructor(IHomedelivery_ID:number,
        IHomedelivery_chargefee:number,
        IHomedelivery_Order:any,
        IHomedelivery_TotalPrice:number){
            this.IHomedelivery_ID=IHomedelivery_ID;
            this.IHomedelivery_chargefee=IHomedelivery_chargefee;
            this.IHomedelivery_Order=IHomedelivery_Order;
            this.IHomedelivery_TotalPrice=IHomedelivery_TotalPrice;    
    }

    time(){
        console.log("24 hour calling");
    }

    get(){
        for(var f of homedata){
console.log(f);
        }
    }
}