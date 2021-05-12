
var employeeData = [
    {
        "EmployeeId":"1",
        "FirstName":"Milit",
        "LastName":"Panchasara",
        "Address":"Radixweb, Ahmedabad, Gujarat",
        "Salary":30000
    },
    {
        "EmployeeId":"2",
        "FirstName":"John",
        "LastName":"K",
        "Address":"Malabar county, Ahmedabad, Gujarat",
        "Salary":20000
    },
    {
        "EmployeeId":"3",
        "FirstName":"Rohan",
        "LastName":"Sharma",
        "Address":"S.g. highway, Ahmedabad, Gujarat",
        "Salary":10000
    },
    {
        "EmployeeId":"4",
        "FirstName":"K",
        "LastName":"Vora",
        "Address":"Gondal Rd., Rajkot, Gujarat",
        "Salary":30000
    }
];

function searchFromData (empId:number) {
   return employeeData.filter((emp, i, employeeData) => {return emp["EmployeeId"] == empId.toString()});
}

function insertData (dataToInsert) {
    employeeData.push(dataToInsert);
    return employeeData;
}

function deleteData (empId:number) {
    for(var index in employeeData)
    {
        if(employeeData[index]["EmployeeId"] == empId.toString())
        {
            employeeData.splice(parseInt(index),1);
        }
    }
    return employeeData;
}

function appendDataArray(newEmpData) {
    employeeData = employeeData.concat(newEmpData);
    return employeeData;
}

function displayArray(employeeData)
{
    employeeData.forEach(emp => {
        display(emp);
    });    
    console.log('-----------------------------------');
}

function display(emp)
{
    var address:string = emp["Address"];
    var addressArray = address.split(',');
    addressArray = addressArray.reverse();
    for(let index in addressArray)
    {
        addressArray[index] = addressArray[index].trim();
    }
    var subArray = addressArray.slice(2);
    subArray = subArray.reverse();

    console.log();
    console.log('-----------------------------------');
    console.log();
    console.log(`Employee ID: ${emp['EmployeeId']}`);
    console.log(`Name: ${emp["FirstName"]} ${emp["LastName"]}`);
    console.log(`Street address: ${subArray.join(', ')}`);
    console.log(`City: ${addressArray[1]}`);
    console.log(`State: ${addressArray[0]}`);
    console.log(`Salary (after deducting PF): ${emp['Salary'] * 0.88}`);
}

function performAction(action:number) {
    switch (action) {
        case 1:
            console.log();
            displayArray(employeeData);
            break;

        case 2:
            console.log();
            console.log("SEARCHED DATA:");
            displayArray(searchFromData(2));
            break;

        case 3:
            var dataToInsert = {
                "EmployeeId":"5",
                "FirstName":"Mohan",
                "LastName":"Mehta",
                "Address":"150 ft. Ring road, Rajkot, Gujarat",
                "Salary":32000
            };
            console.log();
            console.log("WITH INSERTED DATA:");
            insertData(dataToInsert);
            displayArray(employeeData);

            break;

        case 4:
            console.log();
            console.log("DELETED DATA:");
            deleteData(5);
            displayArray(employeeData);
            break;

        case 5:
            var newEmpData = [
                {
                    "EmployeeId":"5",
                    "FirstName":"Mohan",
                    "LastName":"Mehta",
                    "Address":"KKV Hall, 150 ft. Ring road, Rajkot, Gujarat",
                    "Salary":32000
                },
                {
                    "EmployeeId":"6",
                    "FirstName":"Rima",
                    "LastName":"Tiwari",
                    "Address":"CG Rd., Ahmedabad, Gujarat",
                    "Salary":30000
                }
            ];

            console.log();
            console.log("WITH CONCATED ARRAY:");
            appendDataArray(newEmpData);
            displayArray(employeeData);
            break;
    
        default:
            console.log("INVALID ACTION");
            break;
    }
}
console.log("Press 1 to see all employee data");
console.log("Press 2 to search the data");
console.log("Press 3 to insert the data");
console.log("Press 4 to delete the data");
console.log("Press 5 to add multiple employee data (array)");

console.log("Pressing 1");
performAction(1);

console.log("Pressing 2");
performAction(2);

console.log("Pressing 3");
performAction(3);

console.log("Pressing 4");
performAction(4);

console.log("Pressing 5");
performAction(5);

console.log("Pressing any other number");
performAction(0);