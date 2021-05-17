import {IRestorent} from "./IRestorent"

export interface Iorder extends IRestorent{
    ItemName:string;
    Type:string;
    Price:number;
}