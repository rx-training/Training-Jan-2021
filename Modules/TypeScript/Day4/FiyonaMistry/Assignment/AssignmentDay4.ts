// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID. Search the employees who has joined after year 2020. Search the employee who has joined after year 2020 and stays in Mumbai city.

let Employee = new Map();
Employee.set(1, {ID : 1, Name : "Fiyona", City :  "Mumbai", DOJ : new Date(2021, 1, 24)});
Employee.set(2, {ID : 2, Name : "Divyang", City :  "Ahmedabad", DOJ : new Date(2021, 1, 21)});
Employee.set(3, {ID : 3, Name : "Bhautik", City : "Mumbai", DOJ : new Date(2021, 2, 1)});
Employee.set(4, {ID : 4, Name : "Riya", City :  "Ahmedabad", DOJ : new Date(2019, 1, 16)});
Employee.set(5, {ID : 5, Name : "Monali", City :  "Ahmedabad", DOJ : new Date(2020, 1, 3)});

// Employee.set(3, {ID : 3, Name : "Nita", City :  "Mumbai", DOJ : new Date(2021, 2, 1)});


// Display Employee Details
console.log("Employee Details : ");
for(var entry of Employee.entries()){
    console.log(Employee.get(entry[0]));
}
seperator();


// Search By ID
console.log("Search by Id 2 : ");
var searchById = function () {
    let id = 2;
    if(Employee.has(id) == true){
        console.log(Employee.get(id));
    }        
    else{
        console.log("Data not found");          
    }
}
searchById();
seperator();


// Joined after year 2020
console.log("Joined after year 2020 : ");
for(var entry of Employee.entries()){
    if(entry[1].DOJ.getYear() > 120){
        console.log(Employee.get(entry[0]));
    }
}
// Employee.forEach(function (value) {
//     for(var x in value){
//         if(value.DOJ.getYear() > 120){
//             console.log(value[x]);        
//         }
//     }
// });

seperator();


// Joined after year 2020 and stays in Mumbai city.
console.log("Joined after year 2020 and stays in Mumbai city : ");
for(var entry of Employee.entries()){
    if(entry[1].DOJ.getYear() > 120 && entry[1].City == "Mumbai"){
        console.log(Employee.get(entry[0]));
    }
}
// Employee.forEach(function (value) {
//     for(var x in value){
//         if(value.DOJ.getYear() > 120 && value.City == "Mumbai"){
//             console.log(value[x]);        
//         }
//     }
// });
seperator();

function seperator() {
    console.log("------------------------------------------------------------------------------------");
}






// // Initializing values
// let Employee = new Map();
// let emp1 = new Set();
// let emp2 = new Set();
// let emp3 = new Set();
// let emp4 = new Set();
// let emp5 = new Set();

// emp1.add("Fiyona").add("Ahmedabad").add(new Date(2020, 1, 24));
// emp2.add("Divyang").add("Ahmedabad").add(new Date(2021, 1, 21));
// emp3.add("Nita").add("Mumbai").add(new Date(2021, 2, 1));
// emp4.add("Riya").add("Ahmedabad").add(new Date(2019, 1, 16));
// emp5.add("Monali").add("Mumbai").add(new Date(2021, 1, 3));

// Employee.set(1, emp1);
// Employee.set(2, emp2);
// Employee.set(3, emp3);
// Employee.set(4, emp4);
// Employee.set(5, emp5);


// // Display Employee Details
// console.log("Employee Details : ");
// for(var entry of Employee.entries()){
//     console.log(`ID : ${entry[0]}`);
//     for(var s of entry[1]){
//         console.log(`\t${s}`);
//     }
// }
// console.log("");


// // Search By ID
// console.log("Search by Id : ");
// var searchById = function () {
//     let id = 2;
//     if(Employee.has(id) == true){
//         console.log(Employee.get(id));
//     }        
//     else{
//         console.log("Data not found");          
//     }
// }
// searchById();
// console.log("");


// // Joined after year 2020
// console.log("Employee who has joined after year 2020 : ");
// var joined2020 = function (){
// for(var entry of Employee.entries()){
//     for(var s of entry[1]){
//         if(typeof s === "object"){
//             if(s.getYear() > 120){
//                 console.log(`ID : ${entry[0]}`);
//                 console.log(`\t${s}`);
//             }
//         }
//     }
// }
// }
// joined2020();
// console.log("");


// // Joined after year 2020 and stays in Mumbai city.
// console.log("Employee who has joined after year 2020 and stays in Mumbai city : ");
// var city = function (){
// for(var entry of Employee.entries()){
//     for(var s of entry[1]){
//         if(s == "Mumbai"){
//             console.log(`ID : ${entry[0]}`);
//             console.log(`\t${s}`);
//         }
//         // if(typeof s === "object"){
//         //     if(s.getYear() > 120){
//         //         console.log(`ID : ${entry[0]}`);
//         //         console.log(`\t${s}`);
//         //     }
//         // }
//     }
// }
// }
// city();

// console.log("");