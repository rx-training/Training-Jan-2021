var employees = new Map();
//storing data for 5 employees as EmployeeID as key and rest de-tails as their value
employees.set(1,{ID:1,Name:"John Doe",City:"London",DOJ:new Date("1999-8-19")});
employees.set(2,{ID:2,Name:"Mike John",City:"Chicago",DOJ:new Date("2001-12-5")});
employees.set(3,{ID:3,Name:"Jenny Richel",City:"Ontario",DOJ:new Date("2000-6-6")});
employees.set(4,{ID:4,Name:"Alice Tobi",City:"Perth",DOJ:new Date("1998-6-13")});
employees.set(5,{ID:5,Name:"Ella Audrey",City:"France",DOJ:new Date("2000-2-23")});

//seach with employee ID
console.log("Searching record of employeeID 4");
console.log(employees.get(4));

//searching the employee who has joined after 2000
console.log(" ");
console.log("searching the employee who has joined after 2000");
for(var value of employees.values()){
    if(value.DOJ>new Date("2000-1-1")){
        console.log(value);
    }
}

//Searching the employee who has joined after year 2000 and stays in Ontario city
console.log(" ");
console.log("Searching the employee who has joined after year 2000 and stays in Ontario city")
for(var value of employees.values()){
    if(value.DOJ>new Date("2000-1-1") && value.City=="Ontario"){
        console.log(value);
    }
}