import {IRestorent} from "./IRestorent"

export interface ITableReservation extends IRestorent{
    DateTime:Date;
    DinningRoom:string
    Table: number;
    PersonSpace : number;
}
