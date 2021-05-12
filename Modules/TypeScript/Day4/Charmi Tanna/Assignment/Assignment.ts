class Employee
{
    ID:number;
    Name : string;
    City : string;
    DOJ : Date;   
    constructor(ID : number,Name:string,City:string,DOJ:Date)
    {
        this.ID = ID;
        this.Name = Name;
        this.City = City;
        this.DOJ = DOJ;
    }
}
var EmpData;
//Store 5 Employee Data(ID,Name,City,DOJ) in one Array.

    EmpData = [new Employee(1,"Riya","Surat",new Date(2020,10,10)),
    new Employee(2,"Reena","Ahmedabad",new Date(2019,5,30)),
    new Employee(3,"Meena","Navsari",new Date(2018,6,10)),
    new Employee(4,"Roy","Vadodara",new Date(2017,7,10)),
    new Employee(5,"John","Mumbai",new Date(2021,8,10)),];

var id = 5;

console.log(EmpData);

console.log("employee having id 5:");
for(var i of EmpData)
{
    if(i.ID == id)
    {
        console.log(i);
    }
}
//Search the employees who has joined after year 2020
console.log("Employees who has joined after year 2020");
for(var i of EmpData)
{
    if(i.DOJ.getFullYear()>2020)
    {
        console.log(i);
    }
}
//Search the employee who has joined after year 2020 and stays in Mumbai city
console.log("Employee who has joined after year 2020 and stays in Mumbai city");
for(var i of EmpData)
{
    if(i.DOJ.getFullYear()>2020 )
    {
        if(i.City=="Mumbai")
        {
            console.log(i);
        }
    }
}