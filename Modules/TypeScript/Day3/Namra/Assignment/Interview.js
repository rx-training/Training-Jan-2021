var EmployeeOperation;
(function (EmployeeOperation) {
    const numberRegexp = /^[0-9]+$/;
    EmployeeOperation.EmployeeData = [
        { EmployeeId: 1, EmployeeName: 'Namra', EmployeeSalary: 22000, EmployeeContact: '9797979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-01-16'), EmployeeLeavingDate: null },
        { EmployeeId: 2, EmployeeName: 'Jitendra', EmployeeSalary: 25000, EmployeeContact: '9197979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-02-16'), EmployeeLeavingDate: null },
        { EmployeeId: 3, EmployeeName: 'Charmi', EmployeeSalary: 23000, EmployeeContact: '9297979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-03-19'), EmployeeLeavingDate: null },
        { EmployeeId: 5, EmployeeName: 'Kavita', EmployeeSalary: 32000, EmployeeContact: '9397979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-04-18'), EmployeeLeavingDate: null }
    ];
    class Employee {
        Any(Name, Contact) {
            for (var item of EmployeeOperation.EmployeeData) {
                if (item['EmployeeContact'] == Contact && item['EmployeeName'] == Name) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        Create(Name, Salary, Contact, Address) {
            if (!this.Any(Name, Contact)) {
                return `There is already employee with id and name...`;
            }
            else if (!numberRegexp.test(Contact) || Contact.length != 10) {
                return `Please enter a valid contact number...`;
            }
            else {
                var Id = EmployeeOperation.EmployeeData.reduce((acc, shot) => acc = acc > shot.EmployeeId ? acc : shot.EmployeeId, 0) + 1;
                EmployeeOperation.EmployeeData.push({ EmployeeId: Id, EmployeeName: Name, EmployeeSalary: Salary, EmployeeContact: Contact, EmployeeAddress: Address, EmployeeJoiningDate: new Date(), EmployeeLeavingDate: null });
                return `Employee is added successfully and id is ${Id}`;
            }
        }
        ;
        Delete(Name, Contact) {
            if (this.Any(Name, Contact)) {
                for (var i = 0; i < EmployeeOperation.EmployeeData.length; i++) {
                    if (EmployeeOperation.EmployeeData[i]['EmployeeName'] == Name && EmployeeOperation.EmployeeData[i]['EmployeeContact']) {
                        EmployeeOperation.EmployeeData[i]['EmployeeLeavingDate'] = new Date();
                        return `Now you are no more employee of company...`;
                    }
                }
            }
            else {
                return `Employee is not found`;
            }
        }
    }
    EmployeeOperation.Employee = Employee;
})(EmployeeOperation || (EmployeeOperation = {}));
///<reference path="Employee.ts" />
var Interview;
(function (Interview) {
    Interview.InterviewArray = [
        {
            CandidateName: 'Yash',
            CandidateContact: '1234567892',
            CandidateAddress: 'Gokul',
            CandidateTime: new Date('2021-05-16')
        }
    ];
    class ScheduleInterview {
        Any(Name, Contact) {
            for (var inrv of Interview.InterviewArray) {
                if (inrv['CandidateName'] == Name && inrv['CandidateContact'] == Contact) {
                    return true;
                }
            }
            return false;
        }
        ScheduleInterview(Name, Contact, Address, Time) {
            if (this.Any(Name, Contact)) {
                return 'Your interview is already scheduled...';
            }
            else {
                Interview.InterviewArray.push({
                    CandidateName: Name,
                    CandidateContact: Contact,
                    CandidateAddress: Address,
                    CandidateTime: new Date(Time)
                });
                return `Your interview is scheduled at ${Time}`;
            }
        }
        ResultInterview(Name, Contact, Salary, Address, Status) {
            if (Status) {
                var emp = new EmployeeOperation.Employee();
                if (!emp.Any(Name, Contact)) {
                    return `There is already employee with same name and contact number...`;
                }
                else {
                    this.Delete(Name, Contact);
                    return emp.Create(Name, Salary, Contact, Address);
                }
            }
            else {
                this.Delete(Name, Contact);
                return `Better luch next time ${Name}...`;
            }
        }
        Delete(Name, Contact) {
            if (this.Any(Name, Contact)) {
                for (var i = 0; i < Interview.InterviewArray.length; i++) {
                    if (Interview.InterviewArray[i]['CandidateName'] == Name && Interview.InterviewArray[i]['CandidateContact']) {
                        Interview.InterviewArray.splice(i, 1);
                    }
                }
            }
        }
    }
    Interview.ScheduleInterview = ScheduleInterview;
    var intrv = new ScheduleInterview();
    console.log(intrv.ScheduleInterview('Hardi', '1234567890', 'Harash', '2021-09-10'));
    console.log(intrv.ResultInterview('Hardi', '1234567890', 10000, 'Harash', true));
    EmployeeOperation.EmployeeData.forEach(element => {
        console.log(element);
    });
})(Interview || (Interview = {}));
