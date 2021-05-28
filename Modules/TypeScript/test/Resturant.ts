interface IResturant
{
    ResturantID : number;
    ResturantName : string;
    ResturantAddress: string;
    ResturantCountry : string;
}
export interface IResturant2
{
    ResturantID : number;
    ResturantName : string;
}
class Resturant implements IResturant
{
    ResturantID : number;
    ResturantName : string;
    ResturantAddress: string;
    ResturantCountry : string;
    constructor(RID : number,RName : string,RAddress : string,RCountry : string)
    {
        this.ResturantID = RID;
        this.ResturantName = RName;
        this.ResturantAddress = RAddress;
        this.ResturantCountry = RCountry;
    }
}
export var resturant = [new Resturant(1,"Honest","Sola","India"),new Resturant(2,"Sankalp","Atlanta","USA"),new Resturant(3,"Jalaram Parotha House","Any","Canada")];