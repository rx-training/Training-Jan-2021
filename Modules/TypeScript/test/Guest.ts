export interface IGuest
{
    GuestID : number;
    GuestName : string;
    GuestPhoneNumber : number;
}
class Guest implements IGuest
{
    GuestID : number;
    GuestName : string;
    GuestPhoneNumber : number;
    constructor(GID:number,GName:string,GNumber:number)
    {
        this.GuestID = GID;
        this.GuestName = GName;
        this.GuestPhoneNumber = GNumber;
    }
}
export var guest  = [new Guest(1,"Riya",9999999999)];