export interface ITables{
    TableID:number;
    CapacityOfTable:number;
    Status:boolean;
    CustToken?:string;
}

export interface IMenu{
    ItemName:string;
    ItemPrice:number;
    Servings:number;
    FoodType:string;
}