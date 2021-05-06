// class implements interface
class EmployeeInfo {
    constructor(id, name, city, doj) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.doj = doj;
    }
    // add employee using set method and push method
    addEmployee() {
        var emp = new EmployeeInfo(this.id, this.name, this.city, this.doj);
        empMap.set(this.id, emp);
        employeesArray.push(emp);
    }
    // Function to get Employee information by id
    static getEmployeeById(id) {
        console.log();
        if (empMap.has(id)) {
            console.log(`Employee information of Id = ${id}:`);
            console.log(empMap.get(id));
        }
        else {
            console.log("Employee of this Id is not present");
        }
    }
    // Function to get Employee information by joining year
    static getEmployeeByJoinYear(year) {
        console.log();
        console.log("The Map Enteries are of DOJ>=2020: ");
        var newArray = employeesArray.filter((employeesArray, i, arr) => {
            return employeesArray.doj.getFullYear() >= year;
        });
        console.log(newArray);
    }
    // Function to get Employee information by joining year and living city
    static getEmployeeByCityJoinYear(year, city) {
        console.log();
        console.log("The Map Enteries are of DOJ>=2020 && city = Mumbai: ");
        var newArray = employeesArray.filter((employeesArray, i, arr) => {
            return employeesArray.doj.getFullYear() >= year && employeesArray.city == city;
        });
        console.log(newArray);
    }
}
// create a map variable
var empMap = new Map();
// storing all employees information in a array
var employeesArray = [];
// creating objects of EmployeeInfo class and add employee information
var empInfo1 = new EmployeeInfo(1, "Reena", "Mumbai", new Date("2020-01-16"));
empInfo1.addEmployee();
var empInfo2 = new EmployeeInfo(2, "Meena", "Pune", new Date("2019-01-16"));
empInfo2.addEmployee();
var empInfo3 = new EmployeeInfo(3, "Reema", "Mumbai", new Date("2019-01-16"));
empInfo3.addEmployee();
var empInfo4 = new EmployeeInfo(4, "Tina", "Ahmedabad", new Date("2020-01-16"));
empInfo4.addEmployee();
var empInfo5 = new EmployeeInfo(5, "Rekha", "Mumbai", new Date("2020-01-16"));
empInfo5.addEmployee();
//Iterate over map keys  
console.log("---------------------------------Employee Map Keys-----------------------------------------");
for (let key of empMap.keys()) {
    console.log(`Map Keys= ${key}`);
}
console.log();
//Iterate over map values 
console.log("---------------------------------Employee Map Values-----------------------------------------");
for (let value of empMap.values()) {
    console.log("Map Values= ");
    for (let index in value) {
        console.log(value[index]);
    }
    console.log();
}
// call functions
console.log("---------------------------------Employee Information by Id-----------------------------------------");
EmployeeInfo.getEmployeeById(2);
console.log("---------------------------------Employee Information by Joining Year-----------------------------------------");
EmployeeInfo.getEmployeeByJoinYear(2020);
console.log("---------------------------Employee Information by Joining year and living City---------------------------------");
EmployeeInfo.getEmployeeByCityJoinYear(2020, "Mumbai");
