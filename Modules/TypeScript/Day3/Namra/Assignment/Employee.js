var EmployeeOperation;
(function (EmployeeOperation) {
    var numberRegexp = /^[0-9]+$/;
    EmployeeOperation.EmployeeData = [
        { EmployeeId: 1, EmployeeName: 'Namra', EmployeeSalary: 22000, EmployeeContact: '9797979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-01-16'), EmployeeLeavingDate: null },
        { EmployeeId: 2, EmployeeName: 'Jitendra', EmployeeSalary: 25000, EmployeeContact: '9197979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-02-16'), EmployeeLeavingDate: null },
        { EmployeeId: 3, EmployeeName: 'Charmi', EmployeeSalary: 23000, EmployeeContact: '9297979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-03-19'), EmployeeLeavingDate: null },
        { EmployeeId: 5, EmployeeName: 'Kavita', EmployeeSalary: 32000, EmployeeContact: '9397979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-04-18'), EmployeeLeavingDate: null }
    ];
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Employee.prototype.Any = function (Name, Contact) {
            for (var _i = 0, EmployeeData_1 = EmployeeOperation.EmployeeData; _i < EmployeeData_1.length; _i++) {
                var item = EmployeeData_1[_i];
                if (item['EmployeeContact'] == Contact && item['EmployeeName'] == Name) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };
        Employee.prototype.Create = function (Name, Salary, Contact, Address) {
            if (!this.Any(Name, Contact)) {
                return "There is already employee with id and name...";
            }
            else if (!numberRegexp.test(Contact) || Contact.length != 10) {
                return "Please enter a valid contact number...";
            }
            else {
                var Id = EmployeeOperation.EmployeeData.reduce(function (acc, shot) { return acc = acc > shot.EmployeeId ? acc : shot.EmployeeId; }, 0) + 1;
                EmployeeOperation.EmployeeData.push({ EmployeeId: Id, EmployeeName: Name, EmployeeSalary: Salary, EmployeeContact: Contact, EmployeeAddress: Address, EmployeeJoiningDate: new Date(), EmployeeLeavingDate: null });
                return "Employee is added successfully and id is " + Id;
            }
        };
        ;
        Employee.prototype.Delete = function (Name, Contact) {
            if (this.Any(Name, Contact)) {
                for (var i = 0; i < EmployeeOperation.EmployeeData.length; i++) {
                    if (EmployeeOperation.EmployeeData[i]['EmployeeName'] == Name && EmployeeOperation.EmployeeData[i]['EmployeeContact']) {
                        EmployeeOperation.EmployeeData[i]['EmployeeLeavingDate'] = new Date();
                        return "Now you are no more employee of company...";
                    }
                }
            }
            else {
                return "Employee is not found";
            }
        };
        return Employee;
    }());
    EmployeeOperation.Employee = Employee;
})(EmployeeOperation || (EmployeeOperation = {}));
