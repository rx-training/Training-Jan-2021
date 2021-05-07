//interface type for Employee

interface Employee{
    ID:number;
    Name:string;
    City:string;
    DOJ:Date;
    
}
 var Employees :Employee[] =[];
Employees.push(
    {ID:1,Name:"Jayraj",City:"Ahmedabad",DOJ:new Date("2019-12-4")},
    {ID:2,Name:"Akash",City:"Surat",DOJ:new Date("2021-1-1")},
    {ID:3,Name:"Jai",City:"Mumbai",DOJ:new Date("2019-12-4")},
    {ID:4,Name:"Jnavik",City:"Mumbai",DOJ:new Date("2021-2-10")},
    {ID:5,Name:"navi",City:"Ahmedabad",DOJ:new Date("2019-12-4")},
   
);
export {Employee,Employees};