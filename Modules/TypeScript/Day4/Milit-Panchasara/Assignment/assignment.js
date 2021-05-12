var empList = new Map([
    [
        1, {
            id: 1,
            name: "John",
            city: "Rajkot",
            dateOfJoining: new Date('2020-01-01')
        }
    ],
    [
        2, {
            id: 2,
            name: "Mike",
            city: "Mumbai",
            dateOfJoining: new Date('2021-01-21')
        }
    ],
    [
        3, {
            id: 3,
            name: "Jack",
            city: "Mumbai",
            dateOfJoining: new Date('2020-12-01')
        }
    ],
    [
        4, {
            id: 4,
            name: "Rohan",
            city: "Ahmedabad",
            dateOfJoining: new Date('2021-02-01')
        }
    ]
]);
function searchById(id) {
    if (!empList.has(id)) {
        console.log("Employee not found.");
    }
    else {
        var result = empList.get(id);
        console.log(`ID: ${result.id}, Name: ${result.name}, City: ${result.city}, Date of joining: ${result.dateOfJoining}`);
    }
}
console.log();
console.log("Search the employee with ID:");
searchById(1);
searchById(22);
console.log();
console.log("Employees who has joined after year 2020:");
for (let emp of empList.values()) {
    if (emp.dateOfJoining.getFullYear() > 2020) {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, City: ${emp.city}, Date of joining: ${emp.dateOfJoining}`);
    }
}
console.log();
console.log();
console.log("Employee who has joined after year 2020 and stays in Mumbai city:");
for (let emp of empList.values()) {
    if (emp.dateOfJoining.getFullYear() > 2020 && emp.city.toLowerCase() == "mumbai") {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, City: ${emp.city}, Date of joining: ${emp.dateOfJoining}`);
    }
}
console.log();
