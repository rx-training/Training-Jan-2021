// Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary). Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee from the Array. Create one more array emp and join the value with above array. When display list combine firstname and lastname as fullname, From the address field flatnumber,city,state and should be splited.PF should be computed and total salary should be display.
var Employee = [
    { "ID": 1, "FirstName": "Fiyona", "LastName": "Mistry", "Address": "B/h Trimandir, Gandhinagar, Gujarat", "Salary": 34000 },
    { "ID": 2, "FirstName": "Monali", "LastName": "Patel", "Address": "Sector 3, Gandhinagar, Gujarat", "Salary": 37000 },
    { "ID": 3, "FirstName": "Riya", "LastName": "Dodiya", "Address": "Maninagar, Ahmedabad, Gujarat", "Salary": 40000 },
    { "ID": 4, "FirstName": "Divya", "LastName": "Patel", "Address": "Andheri, Andheri East, Mumbai", "Salary": 32000 },
    { "ID": 5, "FirstName": "Patel", "LastName": "Patel", "Address": "Andheri, Andheri West, Mumbai", "Salary": 30000 }
];
// Seperator
function seperator() {
    console.log("-----------------------------------------------------------------------------------------");
}
// Search by index
console.log("Search by Index :");
function searchByIndexFunc() {
    return Employee[0]['FirstName'];
}
// var searchByIndex = Employee.filter((Employee, index, array) => {
//     return Employee.ID == 4
// });
// console.log(searchByIndex);
console.log(searchByIndexFunc());
seperator();
// Search by ID
console.log("Search by ID : ");
var searchByID = function () {
    return Employee.filter(function (Employee, index, array) {
        return Employee.ID == 4;
    });
};
console.log(searchByID());
seperator();
// Display data
function display() {
    for (var i in Employee) {
        console.log(Employee[i]);
    }
    seperator();
}
// Add new data in Array
console.log("Add New Employee : ");
var newEmp = { "ID": 6, "FirstName": "Abc", "LastName": "Xyz", "Address": "Test, Testing, Tested", "Salary": 30000 };
function addNewData(newEmp) {
    Employee.push(newEmp);
    display();
}
addNewData(newEmp);
// Delete a data from Array
console.log("Delete New Employee : ");
function deleteData() {
    Employee.pop();
    display();
}
deleteData();
// Join 2 Arrays
console.log("Join 2 Arrays : ");
var emp = [
    { "ID": 6, "FirstName": "Abc", "LastName": "Xyz", "Address": "Test, Testing, Tested", "Salary": 30000 },
    { "ID": 7, "FirstName": "Xyz", "LastName": "Abc", "Address": "Test, Testing, Tested", "Salary": 43000 }
];
function joinArray(emp) {
    console.log(Employee.concat(emp));
    seperator();
}
joinArray(emp);
// Display data combine firstname and lastname as fullname, From the address field flatnumber,city,state and should be splited.PF should be computed and total salary should be display.
console.log("Employee Data : ");
var displayList = function (Employee) {
    for (var _i = 0, Employee_1 = Employee; _i < Employee_1.length; _i++) {
        var x = Employee_1[_i];
        console.log("Employee ID : " + x.ID);
        console.log("Employee Full Name : " + x.FirstName + " " + x.LastName);
        console.log(x.Address.split(","));
        console.log("Total Salary : " + (x.Salary - x.Salary * 10 / 100));
        console.log("***********************************************");
    }
    seperator();
};
displayList(Employee);
