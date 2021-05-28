//Creating Employee array of 5 employees

let Employees : any[][] = [
                            [1,'Namra','Patel','Gokul, City : Unjha, State : Gujarat',10000],
                            [2,'Suchi','Patel','Sukan palace, City : Kansa, State : Gujarat',20000],
                            [3,'Jitendra','Patel','Gokul, NandanVan Society, City : Unjha, State : Gujarat',80000],
                            [4,'Kathan','Patel','Saundarya, NandanVan Society, City : Visnagar, State : Gujarat',110000],
                            [5,'Shruti','Patel','Sukan, Sukanvilla, City : Vadanagar, State : Gujarat',85000]
                        ];

console.log(Employees.length);
console.log('All Employee Data:');
for(let i=0 ;i< Employees.length;i++)
{
        console.log(`Id : ${Employees[i][0]}, Full Name : ${Employees[i][1]} ${Employees[i][2]}, Address : ${Employees[i][3]},Salary : ${Employees[i][4]}`);
}
//pushing data intp employee array
Employees.push([6,'Charmi','Parikh','BharatNagar, City : Unjha, State : Gujrat',30000]);
console.log();
console.log('All Employee Data after push :');
for(let i=0 ;i< Employees.length;i++)
{
        console.log();
        console.log(`Id : ${Employees[i][0]}, Full Name : ${Employees[i][1]} ${Employees[i][2]},Salary : ${Employees[i][4]}`);
        //implemented logics for pf, state, flat and city
        var pf : number = Employees[i][4] - (0.9 * Employees[i][4]);
        console.log(`PF is ${pf}`);
        console.log(`Your final salary : ${Employees[i][4] - pf}`)
        
        var address : string = String(Employees[i][3]);
        var flat : string = address.substring(0,(address.indexOf('City')-2));
        var city : string = address.substring(address.indexOf('City'),(address.indexOf('State')-2));
        var state : string = address.substring(address.indexOf('State'),(address.length));

        console.log(`Address : ${flat}`);
        console.log(city);
        console.log(state);

}
//Pop the array will remove employee charmi's data
Employees.pop();
console.log();
console.log('All Employee Data after pop :');
for(let i=0 ;i< Employees.length;i++)
{
        console.log(`Id : ${Employees[i][0]}, Full Name : ${Employees[i][1]} ${Employees[i][2]}, Address : ${Employees[i][3]},Salary : ${Employees[i][4]}`)
}

console.log();
//------------------------------------------------------- using json -------------------------------------------
let EmployeesJson : any = [
    {EmpId:1,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000},
    {EmpId:2,FirstName:'Suchi',LastName:'Patel',Address:'Sukan palace, City : Kansa, State : Gujarat',Salary:20000},
    {EmpId:3,FirstName:'Jitendra',LastName:'Patel',Address:'Gokul, NandanVan Society, City : Unjha, State : Gujarat',Salary:80000},
    {EmpId:4,FirstName:'Kathan',LastName:'Patel',Address:'Saundarya, NandanVan Society, City : Visnagar, State : Gujarat',Salary:110000},
    {EmpId:5,FirstName:'Shruti',LastName:'Patel',Address:'Sukan, Sukanvilla, City : Vadanagar, State : Gujarat',Salary:85000}
];
// join two employee array
let EmployeeJsonConcat : any = [
    {EmpId:6,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000},
    {EmpId:7,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000}
];
//--------------concat------------------------
var Emp : any = EmployeesJson.concat(EmployeeJsonConcat);
// the output of it is here
console.log(Emp);
//pushing data into array
//---------------------------------------push------------------------------
EmployeesJson.push({EmpId:6,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000})
console.log(`lenght of employees : ${EmployeesJson.length}`);
//To get keys
//-----------printing data using key value------------------
for(var empData of EmployeesJson)
{
    console.log();
    for(var key in empData)
    {
        console.log(`${key} \t: ${empData[key]}`);
    }
}

console.log();
console.log('Employees whose salary is greater than 10000 are :');
var resultGreater10000 = EmployeesJson.filter(e => e.Salary > 10000);
console.log(resultGreater10000);

EmployeesJson.pop();
EmployeesJson.forEach(element => {
    
    var address : string = String(element['Address']);
    var flat : string = address.substring(0,(address.indexOf('City')-2));
    var city : string = address.substring(address.indexOf('City'),(address.indexOf('State')-2));
    var state : string = address.substring(address.indexOf('State'),(address.length));
    var pf : number = element['Salary'] - (0.9 * element['Salary']);
        
    console.log(`   ID           : ${element['EmpId']}`);
    console.log(`   Full Name    : ${element['FirstName']} ${element['LastName']}`);
    console.log(`   Salary       : ${element['Salary']}`);
    console.log(`   PF           : ${pf}`);
    console.log(`   Final Salary : ${element['Salary']-pf}`)
    console.log(`   Address      : ${flat},`);
    console.log(`                  ${city},`);
    console.log(`                  ${state}`);

});

//---------------------------------------------------------- Functions --------------------------------------------------- 
//To display Employees
function DisplayEmployee(employeeDisplay : any)
{
    employeeDisplay.forEach(element => {
    
        var address : string = String(element['Address']);
        var flat : string = address.substring(0,(address.indexOf('City')-2));
        var city : string = address.substring(address.indexOf('City'),(address.indexOf('State')-2));
        var state : string = address.substring(address.indexOf('State'),(address.length));
        var pf : number = element['Salary'] - (0.9 * element['Salary']);
            
        console.log(`   ID           : ${element['EmpId']}`);
        console.log(`   Full Name    : ${element['FirstName']} ${element['LastName']}`);
        console.log(`   Salary       : ${element['Salary']}`);
        console.log(`   PF           : ${pf}`);
        console.log(`   Final Salary : ${element['Salary']-pf}`)
        console.log(`   Address      : ${flat},`);
        console.log(`                  ${city},`);
        console.log(`                  ${state}`);
    
    });
}
//To push
function PushEmployee(employeePush : any)
{
    EmployeesJson.push(employeePush);
}
PushEmployee({EmpId:6,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000});
//DisplayEmployee(EmployeesJson);
// To pop
function PopEmployee()
{
    EmployeesJson.pop();
}
PopEmployee();
//DisplayEmployee(EmployeesJson);
// To concat

function ConcatEmployee(employeeConcat : any)
{
    var empDisplay : any = EmployeesJson.concat(employeeConcat);
    DisplayEmployee(empDisplay);
}
ConcatEmployee([
    {EmpId:6,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000},
    {EmpId:7,FirstName:'Namra',LastName:'Patel',Address:'Gokul, City : Unjha, State : Gujarat',Salary:10000}
]); 



