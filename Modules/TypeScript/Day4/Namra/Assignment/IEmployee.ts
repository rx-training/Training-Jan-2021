export interface IEmployee
{
    Id : number,
    Name : string,
    Contact : string,
    Address : string,
    Salary : number,
    City : string,
    JoiningDate : Date

    SearchById(Employees : any,Id : number) : any;
    JoinedAfter2020(Employees : any):any;
    JoinedAfter2020InCity(Employee : any, City : string) : any;
}