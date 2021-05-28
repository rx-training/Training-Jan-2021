
var Employees :any= [
    {EmpId:100,FirstName:'Niraj',LastName:'Sapra',Address:'Nirmalnager,Street-no:7,Plot-no:2/B,Omkar,Bhavnager',Salary:20000},
    {EmpId:101,FirstName:'Priya',LastName:'Maheta',Address:'GandhiNager,Street-no:10,Plot-no:112,Sarthi,Baroda',Salary:22000}
    ];

//GET ALL Employee data
function GetEmployeeData(){
    console.log(Employees);
    return Employees;
}

//Insert new employee
function InsertnewEmployee(): void {
    var  lastid = Employees.length;
 var empnewid = Employees[lastid-1].EmpId;
    let newemp ={
        EmpId:empnewid+1,FirstName:'Rajiv',LastName:'Rajput',Address:'varansi,goverdanapprement,flat no :225,Mumbai',Salary:35000
    }
        if(lastid>0)
        {
            console.log("========================Insert-New-Employee=======================");
            Employees.push(newemp);
            console.log("========================Add new data sucessfully=======================");
                
        }
        else
        {
            console.log("Not Any Employee data");
        }
}
//Delete Employee
function DeleteEmp(Empid):void{
    console.log("========================DELETE NEW-Employee=======================");
    console.log(Empid);
    console.log("=============================");
    for(var emp = 0;emp<Employees.length;emp++){
        if(Employees[emp].EmpId == Empid){
            Employees.splice(emp, 1);
        }else{
            console.log("Enter Employee id is not aveliable");
        }
    }
    console.log("=============================");
    console.log("========================Delete Data Sucessfully=======================");
}


// Full name Employee
function Fullname(){
    console.log("========================Full-Name-Employee=======================");
    for(var no of Employees ){
        console.log("=============================");
        var empfullname = no.FirstName+" "+no.LastName;
        console.log(empfullname);
        console.log("=============================");
       
    }
}

// PF Employee
function PFEmployee(){
    console.log("========================PF-Employee=======================");
    for(var no of Employees ){
        console.log("==================================");
        var empfullname = no.FirstName+" "+no.LastName;
        
        console.log("=================PF Salary is 12% =================");
        var Empsalary = no.Salary*(0.12); 
        var getsalary = no.Salary - Empsalary;
        console.log(Empsalary);
        console.log(`${empfullname}+" "+${getsalary}`);        
        console.log("==================================");
       
    }
}

//Splits Employee
function SplitEmployee(){
    console.log("========================Splits-Employee=======================");
    for(var no of Employees ){
        console.log("==================================");
        var empaddress = no.Address;
        var splitted = empaddress.split(',');
        console.log("=================PF Split Employee =================");
        console.log(splitted);
        console.log("==================================");

    }
}


// function Highsalary(){
//     var Highersalarys = Employees.filter(function (Employee,i,Employees) {
//         return Employees.length>1;
//       });
//       console.log(Highersalarys);
    
// }


//filteruse 
function Highsalary(){
    console.log("===================== High Salary ========================");
    var Highersalarys = Employees.filter(function (Emp,i,Employees) {
        return Employees[i].Salary>25000;
      });
      console.log(Highersalarys);
      console.log("=============================================");
}

InsertnewEmployee();
 GetEmployeeData();
 InsertnewEmployee();
 GetEmployeeData();
DeleteEmp(102);
 GetEmployeeData();
Fullname();
GetEmployeeData();
PFEmployee();
GetEmployeeData();
SplitEmployee();
GetEmployeeData();
Highsalary();