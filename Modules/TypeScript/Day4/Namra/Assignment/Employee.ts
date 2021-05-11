import {IEmployee} from "./IEmployee";

export class Employee implements IEmployee{
    Id : number;
    Name : string;
    Contact : string;
    Address : string;
    Salary : number;
    City : string;
    JoiningDate : Date;

    constructor(Id:number,Name:string,Contact : string, Address : string , Salary : number,City:string,Joining : string)
    {
        this.Id = Id;
        this.Name = Name ;
        this.Contact = Contact;
        this.Address = Address;
        this.Salary = Salary;
        this.City = City;
        this.JoiningDate = new Date(Joining);
    }
    SearchById(Employees : Array<Employee>,Id : number) : any
    {
        return Employees.filter(s=>s.Id == Id);
    };
    JoinedAfter2020(Employees : any):any
    {
        return Employees.filter(s => s.JoiningDate.getFullYear() > 2020);
    };
    JoinedAfter2020InCity(Employees : any, City : string) : any
    {
        return Employees.filter(s => s.JoiningDate.getFullYear() > 2020 && s.City == City);
    };

}