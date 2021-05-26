var Employee = {
    details: function(field, address, designation) {
        return this.name +" => Field: " + field + ", Address: " + address + ", Designation: " + designation;
    }
}

var employee1 = {
    name: "X"
}

var employee2 = {
    name: "Y"
}

console.log(Employee.details.apply(employee1, ["IT", "Ahmedabad", "Develpoer"]));
console.log(Employee.details.apply(employee2, ["IT", "Rajkot", "Team Lead"]));
