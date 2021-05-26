var Employee = {
    details: function() {
        return "Field: " + this.field + ", Address: " + this.address + ", Designation: " + this.designation;
    }
}

var employee1 = {
    field: "IT",
    address: "ahmedabad",
    designation: "Develpoer"
}

var employee2 = {
    field: "IT",
    address: "Rajkot",
    designation: "Team Lead"
}

console.log(Employee.details.call(employee1));
console.log(Employee.details.call(employee2));