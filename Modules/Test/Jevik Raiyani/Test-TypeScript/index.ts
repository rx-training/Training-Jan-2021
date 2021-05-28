import {ITableReservation} from  "./ITableReservation";
import {Iorder} from  "./Iordersystem";

export var data : ITableReservation[] = 
[{id: 1, name : "Gayatri..",country:"India",DinningRoom :"A1",Table: 1,DateTime:new Date(2021,5,7,11,50),PersonSpace:2,rating:4.2},
{id: 1, name : "Gangotari",country:"India",DinningRoom :"A1",Table: 2,DateTime:new Date(2021,5,7,11,50),PersonSpace:4,rating:4.2},
{id: 2, name : "BB..",country:"France",DinningRoom :"A1",Table: 1,DateTime:new Date(2021,12,12,3,50),PersonSpace:2,rating:4.2},
{id: 3, name : "CC..",country:"Us",DinningRoom :"A1",Table: 1,DateTime:new Date(2021,12,12,3,50),PersonSpace:2,rating:4.2},
{id: 4, name : "DD..",country:"X",DinningRoom :"A1",Table: 1,DateTime:new Date(2021,12,12,3,50),PersonSpace:2,rating:4.2}]

export var OrdeData : Iorder[] =
[{id:1 , name: "reliance", country: "India",ItemName:"Icecream",Price:22,Type:"Veg",rating:4.2}, 
{id:2 , name: "reliance", country: "India",ItemName:"samosa",Price:22,Type:"Veg",rating:4.2},
{id:3 , name: "reliance", country: "India",ItemName:"aa",Price:22,Type:"Veg",rating:4.2}]