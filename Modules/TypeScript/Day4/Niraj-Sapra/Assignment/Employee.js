"use strict";
exports.__esModule = true;
var Employees = [{
        ID: 1,
        Name: 'Niraj',
        City: 'Bhavnagar',
        DOJ: '2020-06-21T00:00:00.000Z'
    },
    {
        ID: 2,
        Name: 'Priya',
        City: 'Mumbai',
        DOJ: '2019-01-18T00:00:00.000Z'
    },
    {
        ID: 3,
        Name: 'Maya',
        City: 'Amreli',
        DOJ: '2019-07-02T00:00:00.000Z'
    },
    {
        ID: 4,
        Name: 'Raj',
        City: 'Mumbai',
        DOJ: '2020-12-15T00:00:00.000Z'
    }];
var empid;
var Employee = /** @class */ (function () {
    function Employee(name, ECity, EDOJ) {
        this.Name = name;
        this.City = ECity;
        this.DOJ = EDOJ;
    }
    Employee.prototype.ShowAllEmployee = function () {
        console.log(Employees);
    };
    Employee.prototype.InsertnewEmployee = function () {
        console.log();
        if (Employee.length <= 0) {
            empid = 1;
        }
        else {
            empid = Employees.length + 1;
        }
        var Emp = { ID: empid, Name: this.Name, City: this.City, DOJ: this.DOJ };
        Employees.push(Emp);
    };
    Employee.prototype.SerchEmployee = function (id) {
        console.log("-------------------------Serch Data----------------------");
        console.log();
        for (var _i = 0, Employees_1 = Employees; _i < Employees_1.length; _i++) {
            var ids = Employees_1[_i];
            if (ids.ID == id) {
                console.log("Employee Name is " + ids.Name + " . Employee City " + ids.City + " and Joining Date is " + ids.DOJ + " ");
                break;
            }
        }
        console.log("-----------------------------------------------");
    };
    Employee.prototype.After2020AndMumbai = function () {
        console.log("-------------------------After 2020 And Mumbai Data----------------------");
        console.log();
        for (var _i = 0, Employees_2 = Employees; _i < Employees_2.length; _i++) {
            var ids = Employees_2[_i];
            var datetime = new Date(ids.DOJ);
            console.log(datetime.getFullYear());
            if (datetime.getFullYear() > 2020) {
                console.log("Employee Name is " + ids.Name + " . Employee City " + ids.City + " and Joining Date is " + ids.DOJ + " ");
            }
            else {
                console.log("Employee is not Available");
            }
        }
        console.log("-----------------------------------------------");
    };
    return Employee;
}());
function Dates(date) {
    var dates = new Date(date);
    return dates;
}
var emp = new Employee("Jaydeep", "Surat", Dates("2021-09-28"));
emp.InsertnewEmployee();
emp.ShowAllEmployee();
emp.SerchEmployee(4);
emp.After2020AndMumbai();
