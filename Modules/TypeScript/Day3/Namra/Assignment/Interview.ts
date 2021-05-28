///<reference path="Employee.ts" />

namespace Interview {
    export interface Interview {
        CandidateName: string;
        CandidateContact: string;
        CandidateAddress: string;
        CandidateTime: Date;
    }
    var Vacancies : number = 0;
    export var InterviewArray: Array<Interview> = [
        {
            CandidateName: 'Yash',
            CandidateContact: '1234567892',
            CandidateAddress: 'Gokul',
            CandidateTime: new Date('2021-05-16')
        }
    ];
    export class ScheduleInterview implements Interview {
        public CandidateName;
        public CandidateContact;
        public CandidateAddress;
        CandidateTime: Date;

        Any(Name: string, Contact: string): boolean {
            for (var inrv of InterviewArray) {
                if (inrv['CandidateName'] == Name && inrv['CandidateContact'] == Contact) {
                    return true;
                }
            }
            return false;
        }
        ScheduleInterview(Name: string, Contact: string, Address: string, Time: string) {
            if (this.Any(Name, Contact)) {
                return 'Your interview is already scheduled...';
            }
            else {
                InterviewArray.push({
                    CandidateName: Name,
                    CandidateContact: Contact,
                    CandidateAddress: Address,
                    CandidateTime: new Date(Time)
                });
                return `Your interview is scheduled at ${Time}`;
            }
        }
        ResultInterview(Name: string, Contact: string, Salary: number, Address: string, Status: boolean) {
            if (Status) {
                var emp = new EmployeeOperation.Employee();
                if (!emp.Any(Name, Contact)) {
                    return `There is already employee with same name and contact number...`;
                }
                else {
                    if(Vacancies != 0)
                    {
                        this.Delete(Name, Contact);
                        Vacancies--;
                        return `${emp.Create(Name, Salary, Contact, Address)} and ${Vacancies} were left...` ;
                    }
                    else
                    {
                        this.Delete(Name, Contact);
                        return `No more vacancies are available, better luck next time...`;
                    }
                }
            }
            else {
                this.Delete(Name, Contact);
                return `Better luch next time ${Name}...`;
            }
        }
        Delete(Name: string, Contact: string) {
            if (this.Any(Name, Contact)) {
                for (var i = 0; i < InterviewArray.length; i++) {
                    if (InterviewArray[i]['CandidateName'] == Name && InterviewArray[i]['CandidateContact']) {
                        InterviewArray.splice(i, 1);
                    }
                }
            }
        }
    }
 
   
}
