import { ITablesAvailable } from './TablesAvailable';
import { IGuest } from './Guest';
interface IOnlineBooking extends ITablesAvailable,IGuest
{
    BookID : number;
    BookDateTime : Date;
    NoOfGuest : number;
    CurrentBookDateTime : Date;
}
class OnlineBooking implements IOnlineBooking
{
    GuestID : number;
    GuestName : string;
    GuestPhoneNumber : number;
    TableID : number;
    TableCapacity : number;
    BookID : number;
    BookDateTime : Date;
    CurrentBookDateTime : Date;
    TableAvailable : number;
    ResturantID : number;
    ResturantName : string;
    NoOfGuest : number;
    
    constructor(GID : number,GName : string,GNumber: number,TID : number,TCapacity : number,BID: number,BDate : Date,TAavailable : number ,RID:number,RNAme:string,NoGuests : number,CDate :Date)
    {
        this.GuestID =GID;
        this.GuestName = GName;
        this.GuestPhoneNumber = GNumber;
        this.TableID = TID;
        this.TableCapacity = TCapacity;
        this.BookID = BID;
        this.BookDateTime = BDate;
        this.TableAvailable = this.TableAvailable;
        this.ResturantID =RID;
        this.ResturantName = RNAme;
        this.NoOfGuest = NoGuests;
        this.CurrentBookDateTime = CDate;
    }
}

export var booking = [new OnlineBooking(1,"Riya",999999999,1,4,1,new Date(2021,5,7,10,4,5,6),1,1,"Honest",2,new Date(2021,5,7,4,4,5,6))];