let employeeData : (string|number)[][]=[["ID","FirstName","LastName","Address","Salary"],
                                        [1,"John","Doe","405, London, UK",20000],
                                        [2,"Perry","Lodge","209, Columbia, USA",23000],
                                        [3,"Luis","Cooper","308, Paris, France",19000],
                                        [4,"Jessi","Johns","900, Chicago, USA",11000],
                                        [5,"Katty","Parry","088, Toronto, Canada",20000]]
//let jsonData = JSON.parse(employeeData);
console.log("Search employee by Employee ID");
console.log("Record of ID 4:");
for(var i=0;i<employeeData.length;i++)
{
    if(employeeData[i][0]==4){
        console.log(`ID: ${employeeData[i][0]} FullName: ${employeeData[i][1]} ${employeeData[i][2]} Address: ${employeeData[i][3]} Salary: ${employeeData[i][4]}`);
    }

}

console.log("Inserting new employee");
var len : Number = employeeData.length;
employeeData.push([6,"Victoria","Lime","203, Washington, DC",45000]);
if(employeeData.length>len){
    console.log("Data Inserted Successfully");
    for (var item of employeeData){
        console.log(item);
    }
}

console.log("Deleting the employee with ID 5");
var deletedRecord = employeeData.splice(5,1);
console.log(`Deleted Record is ${deletedRecord}`);
for (var item of employeeData){
    console.log(item);
}

let emp : (string|number)[][]=[[7,"Jimin","Park","43, Seoul, South Korea",14000],
                                [8,"Jungkook","Jeon","29, Busan, South Korea",13000]]
console.log("Inserting new employees")
let empRecord = employeeData.concat(emp);

console.log("Employee Record");
for (var i=1;i<empRecord.length;i++){
    for(var j=0;j<5;j++){
        if(j==3){
            let add=empRecord[i][j].toString();
            var address=add.split(',');
        }
        if(j==4){
            var PF = Number(empRecord[i][j]) * 0.12;
        }
    }
    console.log(`ID: ${empRecord[i][0]} \t EmployeeName: ${empRecord[i][1]} ${empRecord[i][2]}`);
    console.log(`\t\tAddress: FlatNumber: ${address[0]} City: ${address[1]} State: ${address[2]}`);
    console.log(`\t\tSalary: Basic Salary ${empRecord[i][4]} PF:${PF}`);
}

