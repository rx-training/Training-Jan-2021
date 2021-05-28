
namespace EmployeeOperation {
    export interface IEmployee extends IDEmployee {
        
        Any: (Name: string, Contact: string) => boolean;
        Create: (Name: string, Salary: number, Contact: string, Address: string) => number | string;
        Delete: (Name: string, Contact: string) => string;
    }
    export interface IDEmployee {
        EmployeeId: number;
        EmployeeName: string;
        EmployeeSalary: number;
        EmployeeContact: string;
        EmployeeAddress: string;
        EmployeeJoiningDate: Date;
        EmployeeLeavingDate?: Date;
    }
    const numberRegexp = /^[0-9]+$/;

    export var EmployeeData: Array<IDEmployee> = [
        { EmployeeId: 1, EmployeeName: 'Namra', EmployeeSalary: 22000, EmployeeContact: '9797979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-01-16'), EmployeeLeavingDate: null },
        { EmployeeId: 2, EmployeeName: 'Jitendra', EmployeeSalary: 25000, EmployeeContact: '9197979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-02-16'), EmployeeLeavingDate: null },
        { EmployeeId: 3, EmployeeName: 'Charmi', EmployeeSalary: 23000, EmployeeContact: '9297979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-03-19'), EmployeeLeavingDate: null },
        { EmployeeId: 5, EmployeeName: 'Kavita', EmployeeSalary: 32000, EmployeeContact: '9397979797', EmployeeAddress: 'Gokul', EmployeeJoiningDate: new Date('2019-04-18'), EmployeeLeavingDate: null }

    ];
    export class Employee implements IEmployee {
        public EmployeeId;
        public EmployeeName;
        public EmployeeContact;
        public EmployeeSalary;
        public EmployeeAddress;
        public EmployeeJoiningDate;
        public EmployeeLeavingDate;

        Any(Name: string, Contact: string): boolean {
            for (var item of EmployeeData) {
                if (item['EmployeeContact'] == Contact && item['EmployeeName'] == Name) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        Create(Name: string, Salary: number, Contact: string, Address: string) {
            if (!this.Any(Name, Contact)) {
                return `There is already employee with id and name...`;
            }
            else if (!numberRegexp.test(Contact) || Contact.length != 10) {
                return `Please enter a valid contact number...`;
            }
            else {
                var Id = EmployeeData.reduce((acc, shot) => acc = acc > shot.EmployeeId ? acc : shot.EmployeeId, 0) + 1;
                EmployeeData.push(
                    { EmployeeId: Id, EmployeeName: Name, EmployeeSalary: Salary, EmployeeContact: Contact, EmployeeAddress: Address, EmployeeJoiningDate: new Date(), EmployeeLeavingDate: null }
                );
                return `Employee is added successfully and id is ${Id}`;
            }
        };
        Delete(Name: string, Contact: string): string {
            if (this.Any(Name, Contact)) {
                for (var i = 0; i < EmployeeData.length; i++) {
                    if (EmployeeData[i]['EmployeeName'] == Name && EmployeeData[i]['EmployeeContact']) {
                        EmployeeData[i]['EmployeeLeavingDate'] = new Date();
                        return `Now you are no more employee of company...`;
                    }
                }
            }
            else {
                return `Employee is not found`;
            }
        }
    }
}
