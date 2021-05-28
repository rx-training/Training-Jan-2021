import { IGuest } from './Guest';
interface ITokenConfirmation extends IGuest
{
    TokenNumber : number;
}
class TokenConfirmation implements ITokenConfirmation
{
    GuestID : number;
    GuestName : string;
    GuestPhoneNumber : number;
    TokenNumber : number;
    constructor(GuestID : number,GuestName : string,GuestPhoneNumber : number,TokenNumber : number)
    {
        this.GuestID = GuestID;
        this.GuestName = GuestName;
        this.GuestPhoneNumber = GuestPhoneNumber;
        this.TokenNumber = TokenNumber;
    }
}
export var TConfimation = [new TokenConfirmation(1,"Riya",9999999999,1000)];
