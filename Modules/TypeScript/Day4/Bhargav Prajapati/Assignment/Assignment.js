var Empdata = [
    {
        Id: 1,
        Name: "ABC",
        City: "Ahmedabad",
        DataofJoining: "2019-01-25"
    },
    {
        Id: 2,
        Name: "DEF",
        City: "Mumbai",
        DataofJoining: "2021-02-02"
    },
    {
        Id: 3,
        Name: "GHI",
        City: "Surat",
        DataofJoining: "2020-02-02"
    },
    {
        Id: 4,
        Name: "JKL",
        City: "Baroda",
        DataofJoining: "2021-02-22"
    },
    {
        Id: 5,
        Name: "MNO",
        City: "Surendranagar",
        DataofJoining: "2021-05-06"
    }
];
class Emps {
    GetEmployeeById(Id) {
        let map = new Map();
        for (const emp of Empdata) {
            map.set(emp.Id, emp);
        }
        if (map.has(Id) == true) {
            var findemp = map.get(Id);
            console.log(findemp);
            //console.log(typeof findemp);
        }
        else {
            console.log("Employee is not Presenet");
        }
    }
    SearchByYear(year) {
        let map = new Map();
        let dateofjoining;
        var flag = true;
        for (const emp of Empdata) {
            map.set(emp.Id, emp);
            dateofjoining = new Date(emp.DataofJoining);
            if (dateofjoining.getFullYear() > year) {
                console.log(`Employee Id :- ${emp.Id}`);
                console.log(`Employee Name :- ${emp.Name}`);
                console.log(`Date Of Joining :- ${emp.DataofJoining}`);
                console.log(`Employee City :-  ${emp.City}`);
                console.log("=========================================");
                flag = false;
            }
        }
        if (flag == true) {
            console.log(`Employee is not Hired in ${year}`);
        }
    }
    searchByCity(year, City) {
        let map = new Map();
        let set = new Set();
        let dateofjoining;
        var flag = true;
        for (const emp of Empdata) {
            map.set(emp.Id, emp);
            dateofjoining = new Date(emp.DataofJoining);
            if (dateofjoining.getFullYear() > year && emp.City == City) {
                console.log(`Employee Id :- ${emp.Id}`);
                console.log(`Employee Name :- ${emp.Name}`);
                console.log(`Date Of Joining :- ${emp.DataofJoining}`);
                console.log(`Employee City :-  ${emp.City}`);
                console.log("=========================================");
                flag = false;
            }
        }
        if (flag == true) {
            console.log(`Employee is not Hired in ${year} and this ${City}`);
        }
    }
}
var data = new Emps();
data.GetEmployeeById(1);
data.SearchByYear(2020);
data.searchByCity(2020, "Mumbai");
export {};
