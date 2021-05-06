import {IEmployee} from "./IEmployee";
var Employees :any = [{
    ID: 1,
    Name: 'Niraj',
    City: 'Bhavnagar',
    DOJ: '2020-06-21T00:00:00.000Z'},
{
    ID: 2,
    Name: 'Priya',
    City: 'Mumbai',
    DOJ: '2019-01-18T00:00:00.000Z'
},
{
    ID: 3,
    Name: 'Maya',
    City: 'Amreli',
    DOJ: '2019-07-02T00:00:00.000Z'
},
{
    ID: 4,
    Name: 'Raj',
    City: 'Mumbai',
    DOJ: '2020-12-15T00:00:00.000Z'
}];
var empid:number;
class Employee implements IEmployee{
    ID : number;
    Name : string;
    City : string;
    DOJ : Date;
    empid :number;
    constructor(  name : string , ECity : string , EDOJ : Date){
        this.Name =name;
        this.City = ECity;
        this.DOJ = EDOJ;
    }
    ShowAllEmployee(){
        console.log(Employees);
    }
    
    InsertnewEmployee(){
        console.log();
        if(Employee.length <= 0){
            empid = 1;
        }
        else{
            empid = Employees.length + 1;
        }
        var Emp : any = {ID :empid ,Name:this.Name,City:this.City,DOJ:this.DOJ};
        Employees.push(Emp);
    }
    SerchEmployee(id:number){
        console.log("-------------------------Serch Data----------------------");
        console.log();
        for(var ids of Employees){
             if(ids.ID == id){
                console.log(`Employee Name is ${ids.Name} . Employee City ${ids.City} and Joining Date is ${ids.DOJ} `);
                break;
            }
        }
        console.log("-----------------------------------------------");
    }
    After2020AndMumbai(){
        console.log("-------------------------After 2020 And Mumbai Data----------------------");
        console.log();
        for(var ids of Employees){
            let datetime : Date = new Date(ids.DOJ);
            console.log(datetime.getFullYear());
             if(datetime.getFullYear() >2020 ){
                console.log(`Employee Name is ${ids.Name} . Employee City ${ids.City} and Joining Date is ${ids.DOJ} `);
             }
        }
        console.log("-----------------------------------------------");
    }


} 
function Dates(date:string){
    let dates: Date = new Date(date);  
    return dates;
}

var emp = new Employee("Jaydeep","Surat",Dates("2021-09-28"));
emp.InsertnewEmployee(); 
emp.ShowAllEmployee();
emp.SerchEmployee(4);
emp.After2020AndMumbai();