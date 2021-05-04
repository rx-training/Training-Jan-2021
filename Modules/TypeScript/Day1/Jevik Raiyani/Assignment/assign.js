var employee = [[1, "Jevik", "Rayani", "26/11 Bhojarajpara, Gondal,Rajkot, Gujarat", 12354],
    [2, "Pratik", "Usadadiya", "125 Ramnagar,Varachha,Surat,Gujarat", 12354],
    [3, "Tirath", "Savasaiya", "26/11 Bhojarajpara, Gondal,Rajkot, Gujarat", 12354],
    [5, "Raj", "Sojitra", "26/11 Bhojarajpara, Gondal,Rajkot, Gujarat", 55555],
    [8, "Gopal", "Patodiya", "26/11 Bhojarajpara, Gondal,Rajkot, Gujarat", 12354]];
//Search by index
console.log(employee[0]);
//search by EMPid
for (var i = 0; i < employee.length; i++) {
    {
        if (employee[i][0] == 2) {
            console.log(employee[i]);
        }
    }
}
// add(push)
employee.push([12, "ds", "sd0", "26/11 Bhojarajpara, Gondal,Rajkot, Gujarat", 150]);
console.log(employee);
//delete from array
employee.pop();
console.log(employee);
//new array
var emp = employee;
for (var i = 0; i < emp.length; i++) {
    console.log("ID: " + emp[i][0] + "  Name: " + emp[i][1].toString().concat(" ").concat(emp[i][2].toString()) + "  Address: " + emp[i][3].toString().split(",") + " Salary: (PF 1.2) " + parseInt(emp[i][4].toString()) * 1.2);
}
