import { table } from "./Menu";

interface booking {
DateOfBook:Date;
CustomerId:number;
TableId:number;
Token?:number;

}
var AllBookings :booking[]=[];
class Book implements booking{
    constructor( public Token:number, public CustomerId :number,public TableId:number ,public DateOfBook:Date  ){}
  protected  CheckBookTime(date:Date){
        let dateNow = new Date()

        //reservation should be 6 hrs advance and should not be greater then 30
        if(date.getHours() - dateNow.getHours() > 6 || date.getDay() - dateNow.getDay() < 30){
            console.log(`Booking Completed`);
            return true;
        }
        return false;
    }
    //to create a booking and add to allbooking list
    Createbooking(param:booking){
       if( this.CheckBookTime(this.DateOfBook)){
        this.Token = ++this.Token;
        AllBookings.push(param);
        console.log(`${this.CustomerId} has Completed their booking with us`);
        console.log(`The token number is:${this.Token}`);
       };
        
        

    };
  
}
export {booking,AllBookings,Book};