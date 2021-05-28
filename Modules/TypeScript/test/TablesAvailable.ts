import { IResturant2 } from './Resturant';
export interface ITablesAvailable extends IResturant2
{
    TableID : number;
    TableCapacity : number;
}
class TablesAvailable implements ITablesAvailable
{
    TableID : number;
    TableCapacity : number;
    TableAvailable : number;
    ResturantID : number;
    ResturantName : string;
    constructor(TID : number,TCapacity : number,TAvailable : number,RID : number,RName : string)
    {
        this.TableID = TID;
        this.TableCapacity = TCapacity;
        this.TableAvailable = TAvailable;
        this.ResturantID = RID;
        this.ResturantName = RName;
    }
}
export var tablesAvailable = [new TablesAvailable (1,4,10,1,"Honest"),new TablesAvailable (1,6,5,1,"Honest"),new TablesAvailable (1,10,4,1,"Honest")];

