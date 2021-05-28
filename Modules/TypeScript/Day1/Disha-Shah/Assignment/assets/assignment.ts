let employees = [    
    { Id: 1, FirstName : "Reena", LastName: "Sharma", Address: "C-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 240000},
    { Id: 2, FirstName : "Meena", LastName: "Tiwari", Address: "H-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 480000},   
    { Id: 3, FirstName : "Rita", LastName: "Pandya", Address: "E-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 360000}, 
    { Id: 4, FirstName : "Reshma", LastName: "Shah", Address: "A-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 640000}, 
    { Id: 5, FirstName : "Tina", LastName: "Agarwal", Address: "B-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 560000}
];

var names : string[];

// Get all employees
function GetAllEmployees() : void
{
    document.getElementById("content").innerHTML = "";

    for(var emp in employees)
    {
        var newAddress: string[] = employees[emp].Address.split(',');

        var total : number= employees[emp].Salary + (employees[emp].Salary * 0.1);

        document.getElementById("content").innerHTML += `<tr><td>${employees[emp].Id}</td><td>${employees[emp].FirstName} ${employees[emp].LastName}</td><td>${newAddress[0]}</td><td>${newAddress[1]}</td><td>${newAddress[2]}</td><td>${newAddress[3]}</td><td>${total}</td><td><button class="btn btn-danger" onclick="deleteEmp(${emp})">Delete</button></td></tr>`;
    }
}

console.log(employees);

GetAllEmployees();

// get employee information based on index number
function indexEmp() : void
{
    var index: string = (document.getElementById("myIndex") as HTMLInputElement).value;

    var newAddress:string[] = employees[index].Address.split(',');

    var total:number = employees[index].Salary + (employees[index].Salary * 0.1);

    document.getElementById("indexContent").innerHTML = `<tr><td>${employees[index].Id}</td><td>${employees[index].FirstName} ${employees[index].LastName}</td><td>${newAddress[0]}</td><td>${newAddress[1]}</td><td>${newAddress[2]}</td><td>${newAddress[3]}</td><td>${total}</td></tr>`;

}

// get employee information based on employee id
function idEmp():void
{
    var index:string = (document.getElementById("myId") as HTMLInputElement).value;

    var newArray = employees.filter((employees, i, arr) => {
        return employees.Id==parseInt(index);
    });

    var newAddress: string[] = newArray[0].Address.split(',');

    var total: number = newArray[0].Salary + (newArray[0].Salary * 0.1);

    document.getElementById("idContent").innerHTML = `<tr><td>${newArray[0].Id}</td><td>${newArray[0].FirstName} ${newArray[0].LastName}</td><td>${newAddress[0]}</td><td>${newAddress[1]}</td><td>${newAddress[2]}</td><td>${newAddress[3]}</td><td>${total}</td></tr>`;

}

// add employee
function addEmp() : void
{
    var fname = (document.getElementById("firstName") as HTMLInputElement).value;
    var lname = (document.getElementById("lastName") as HTMLInputElement).value;
    var address = (document.getElementById("address") as HTMLInputElement).value;
    var salary = parseInt((document.getElementById("salary") as HTMLInputElement).value);
    var employee = { Id: employees.length + 1, FirstName : fname, LastName: lname, Address: address, Salary: salary};

    employees.push(employee);

    GetAllEmployees();
}

// delete employee
function deleteEmp(id:string)
{
    var index : number = parseInt(id);
    employees.splice(index,1);

    GetAllEmployees();
}

// join two employee arrays
function joinEmp() : void
{
    let employees1 = [    
        { Id: 11, FirstName : "Reena", LastName: "Sharma", Address: "C-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 240000},
        { Id: 21, FirstName : "Meena", LastName: "Tiwari", Address: "H-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 480000}  
    ];

    var mergedEmp = employees.concat(employees1);

    console.log(mergedEmp);

    document.getElementById("joinContent").innerHTML = "";

    for (var empObj of mergedEmp)
    {
        var newAddress: string[] = empObj.Address.split(',');

        var total: number = empObj.Salary + (empObj.Salary * 0.1);

        document.getElementById("joinContent").innerHTML += `<tr><td>${empObj.Id}</td><td>${empObj.FirstName} ${empObj.LastName}</td><td>${newAddress[0]}</td><td>${newAddress[1]}</td><td>${newAddress[2]}</td><td>${newAddress[3]}</td><td>${total}</td></tr>`;

    }
}