import { ITables, IMenu } from "./interface";
import { tables, MenuItems } from "./app";
import {OCustomers} from "./main";


export class Customers{
    CustomerID:number;
    CName:string;
    Address:string;
    ContactNo:number;
    Token?:string;

    constructor(id:number,name:string,contactNo:number,add:string) {
        this.CustomerID=id,
        this.CName=name;
        this.ContactNo=contactNo;
        this.Address=add;
    }

    addNewCustomer(data:Customers){
        OCustomers.push(data);
    }

    ListOfTables():void{
        for(var item of tables){
            if(item.Status==true){
                console.log(`TableNo: ${item.TableID}\tCapacity: ${item.CapacityOfTable}\tStatus: Occupied`);
            }else{
                console.log(`TableNo: ${item.TableID}\tCapacity: ${item.CapacityOfTable}\tStatus: Available`);
            }
        }
    }

    TableBooking(ID:number,BookingDateTime:Date):void{
        var time = new Date().getTime() - BookingDateTime.getTime();
        console.log(time);
        if(time<21600){
            console.log("You have book the table 6 hours before you want to dine-in");
        }else{
            for(var item of tables){
                if(item.TableID==ID && item.Status==true){
                    console.log("This table is already booked. Please Choose another or wait for while");
                }else if(item.TableID==ID && item.Status==false){
                    console.log("Your Reservation is done");
                    this.Token=this.CName+this.CustomerID;
                    item.CustToken=this.Token;
                    item.Status=true;
                }else{
                    console.log(`There is no such table as ${ID}. PLease try again!!`);
                }
            }
        }
    }

    removeBooking(ID:number){
        for(var item of tables){
            if(item.TableID==ID && item.Status==true && item.CustToken==this.Token){
                this.Token=null;
                item.CustToken=null;
                item.Status=false;
            }
        }
    }

    WatchMenu():void{
        for(var item of MenuItems){
            console.log(item);
        }
    }

    placeOrder(ItemList:({ItemName:string, Quantity:number})[],foodChoice:string,OrderTime:Date):void{
        var bill:number=0;
        var foodTypes:string[] = foodChoice.split(',');
        if(this.Token!=null){
            console.log("You can not place order since you already have booked one table.");
            console.log("Please Remove booking first and then place the order");
        }else{
            if(foodTypes.length>1){
                for(var item of ItemList){
                    for(var i of MenuItems){
                        if(item.ItemName==i.ItemName){
                            bill+=(i.ItemPrice*item.Quantity);
                        }
                    }
                }
            }else{
                for(var item of ItemList){
                    for(var i of MenuItems){
                        if(item.ItemName==i.ItemName && foodChoice==i.FoodType){
                            bill+=(i.ItemPrice*item.Quantity);
                        }else{
                            console.log(`${item.ItemName} is not ${foodChoice}, Please order it again in next order`);
                        }
                    }
                }
            }

            this.Token=this.CName+this.CustomerID;
            var totalAmount:number = bill+(bill*0.12);
            var arrivingTime:Date = new Date(OrderTime.getFullYear(),OrderTime.getMonth(),OrderTime.getDate(),OrderTime.getHours()+2,OrderTime.getMinutes(),OrderTime.getSeconds());
            console.log(`Dear ${this.CName}, Your order has been placed.`);
            console.log(`The token for this order is ${this.Token}`); 
            console.log("Your Order summary is:");
            console.log("ItemName\t Quantity\t Price");
            for(var item of ItemList){
                for(var i of MenuItems){
                    if(item.ItemName==i.ItemName){
                        console.log(`${item.ItemName}\t ${item.Quantity}\t ${i.ItemPrice}`);
                    }
                }
            }
            console.log(`The total Amount inclusive of tax  will be ${totalAmount}`);
            console.log(`It will arrive before ${arrivingTime}`);
        }
    }

    orderPlaced(ArrivingTime:Date):void{
        if(this.Token!=null){
            this.Token=null;
            console.log(`The order for ${this.CName} has been delivered at ${ArrivingTime}`);
        }else{
            console.log("You haven't placed any order yet!!!");
        }
    }
}



export class Tables{
    addTable(data:ITables):void{
        tables.push(data);
    }
}

export class Menu{
    addMenuItem(data:IMenu):void{
        MenuItems.push(data);
    }
}