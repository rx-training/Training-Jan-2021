var Applicant;
(function (Applicant) {
    Applicant.Applicantdata = [
        { FirstName: "Jenil", LastName: "Virani", Qualification: "B.Tec", Experience: 5, ExpectedSalary: 350000, JobPost: ".net", Eamil: "jeni123@gmail.com", PhoneNumber: "91568878877", Address: "Ahmedabad", Hobby: "Pyaing Cricket" },
        { FirstName: "Kasim", LastName: "Vora", Qualification: "BCA", Experience: 7, ExpectedSalary: 550000, JobPost: ".net", Eamil: "Kasim123@gmail.com", PhoneNumber: "91568878877", Address: "Surat", Hobby: "Pyaing Chess" },
        { FirstName: "Parth", LastName: "Modi", Qualification: "Computer Science", Experience: 2, ExpectedSalary: 250000, JobPost: "Java", Eamil: "Parth123@gmail.com", PhoneNumber: "91568878877", Address: "Baroda", Hobby: "Watching Movies" },
        { FirstName: "Karan", LastName: "Chauhan", Qualification: "MCA", Experience: 2, ExpectedSalary: 150000, JobPost: "java", Eamil: "Karan123@gmail.com", PhoneNumber: "91568878877", Address: "Baroda", Hobby: "Reading Bookes" },
        { FirstName: "Jimit", LastName: "Modi", Qualification: "B.Tec", Experience: 2, ExpectedSalary: 350000, JobPost: "Node", Eamil: "Jimit123@gmail.com", PhoneNumber: "98787878448", Address: "Mumbai", Hobby: "Travelling" },
        { FirstName: "Bhavik", LastName: "Prajapati", Qualification: "MCA", Experience: 5, ExpectedSalary: 350000, JobPost: "HR", Eamil: "Bhavik123@gmail.com", PhoneNumber: "91568878877", Address: "Mumbai", Hobby: "Watching Cricket" }
    ];
})(Applicant || (Applicant = {}));
var InterviewProcess;
(function (InterviewProcess) {
    InterviewProcess.InterviewProcessdata = [
        { RoundNumber: 1, Test: "Apptitude", FacultyName: "XYZ", MinimumQualificationMark: 35, TimeDuration: "60 Min" },
        { RoundNumber: 2, Test: "GroupDicussion", FacultyName: "ABC", MinimumQualificationMark: 45, TimeDuration: "30 Min" },
        { RoundNumber: 3, Test: "CoddingRound", FacultyName: "PQR", MinimumQualificationMark: 55, TimeDuration: "1 HR 20 Min" },
        { RoundNumber: 4, Test: "HR Round", FacultyName: "AQWEE", MinimumQualificationMark: 15, TimeDuration: "30 Min" }
    ];
})(InterviewProcess || (InterviewProcess = {}));
var ResultofInterview;
(function (ResultofInterview) {
    ResultofInterview.ResultofInterviewData = [
        { CandidateFirstName: "Jenil", CandidateLastName: "Virani", ScoredMark: 250, QualifiedRound: 4, StatusOfResult: "Pending" },
        { CandidateFirstName: "Kasim", CandidateLastName: "Vora", ScoredMark: 250, QualifiedRound: 4, StatusOfResult: "Pending" },
        { CandidateFirstName: "Parth", CandidateLastName: "Modi", ScoredMark: 250, QualifiedRound: 4, StatusOfResult: "Pending" },
        { CandidateFirstName: "Jimit", CandidateLastName: "Modi", ScoredMark: 250, QualifiedRound: 2, StatusOfResult: "Pending" },
        { CandidateFirstName: "Bhavik", CandidateLastName: "Prajapati", ScoredMark: 250, QualifiedRound: 2, StatusOfResult: "Pending" },
    ];
    class CalculateResult {
        Result() {
            for (var data of ResultofInterview.ResultofInterviewData) {
                var temp = ResultofInterview.ResultofInterviewData.filter(ResultofInterviewData => ResultofInterviewData.CandidateFirstName == data.CandidateFirstName)[0];
                var resultstatus = ResultofInterview.ResultofInterviewData.indexOf(temp);
                if (data.QualifiedRound == 4) {
                    ResultofInterview.ResultofInterviewData[resultstatus].StatusOfResult = "Hired";
                }
                else {
                    ResultofInterview.ResultofInterviewData[resultstatus].StatusOfResult = "Not Hired";
                }
            }
        }
    }
    ResultofInterview.CalculateResult = CalculateResult;
})(ResultofInterview || (ResultofInterview = {}));
var Scheduling;
(function (Scheduling) {
    Scheduling.Schedulingdata = [
        { TimeSlot: "12:30 PM", Address: "Ahmedabad", Date: "12/11/2020" },
        { TimeSlot: "10:30 AM", Address: "Surat", Date: "25/11/2020" },
        { TimeSlot: "08:30 AM", Address: "Baroda", Date: "27/11/2020" },
        { TimeSlot: "08:30 AM", Address: "Mumbai", Date: "12/11/2020" }
    ];
})(Scheduling || (Scheduling = {}));
var Vecancies;
(function (Vecancies) {
    Vecancies.vecencydata = [
        { DepartmentId: 1, DepartmentName: ".Net", PostName: "sr.Softwere Engineer", NumberOfOpening: 10 },
        { DepartmentId: 2, DepartmentName: "PHP", PostName: "Jr.Softwere Engineer", NumberOfOpening: 5 },
        { DepartmentId: 3, DepartmentName: "NodeJs", PostName: "Developer", NumberOfOpening: 8 },
        { DepartmentId: 4, DepartmentName: "Java", PostName: "Technical Engineer", NumberOfOpening: 10 },
        { DepartmentId: 5, DepartmentName: "HR", PostName: "HR Manager", NumberOfOpening: 2 }
    ];
})(Vecancies || (Vecancies = {}));
/// <reference path="Applicant.ts"/>
/// <reference path="IntervierProcess.ts"/>
/// <reference path="ResultofInterview.ts"/>
/// <reference path="Scheduling.ts"/>
/// <reference path="vacancies.ts"/>
class Report {
    showReport(Name) {
        var resultcal = new ResultofInterview.CalculateResult();
        resultcal.Result();
        var flag = true;
        var flag1 = true;
        for (const iterator of Applicant.Applicantdata) {
            if (iterator.FirstName == Name) {
                flag1 = false;
                for (var chkresult of ResultofInterview.ResultofInterviewData) {
                    if (chkresult.StatusOfResult == "Hired" && chkresult.CandidateFirstName == Name) {
                        console.log("========================Report Of Hired Employeee====================");
                        console.log(`FirstName :-   ${iterator.FirstName}`);
                        console.log(`LasttName :-   ${iterator.LastName}`);
                        console.log(`EmailAddress :- ${iterator.Eamil}`);
                        console.log(`Phone Number :-  ${iterator.PhoneNumber}`);
                        console.log(`AppliedForPosition :-  ${iterator.JobPost}`);
                        console.log(`Address :- ${iterator.Address}`);
                        console.log(`Exprience :-  ${iterator.Experience} Year`);
                        console.log(`Qulification :- ${iterator.Qualification}`);
                        console.log(`Expected Salary :-  ${iterator.ExpectedSalary}`);
                        console.log(`Scored Mark :-  ${chkresult.ScoredMark}`);
                        console.log(`Qualified Round :- ${chkresult.QualifiedRound}`);
                        console.log(`Hobby :- ${iterator.Hobby}`);
                        console.log("Congratulation You Are Selected :)");
                        flag = false;
                    }
                }
                if (flag == true) {
                    console.log("======================================");
                    console.log(`Sorry ${Name}  You have not Seleted `);
                }
            }
        }
        if (flag1 == true) {
            console.log("======================================");
            console.log(`Please  ${Name} Register For InterView Process`);
        }
    }
    InterviewDetails() {
        console.log("============================Vecancy Related Details=====================");
        for (const iterator of Vecancies.vecencydata) {
            console.log(`Department Name :-  ${iterator.DepartmentName}`);
            console.log(`Number Of Opning :-  ${iterator.NumberOfOpening}`);
            console.log(`Post for Recrutment :- ${iterator.PostName}`);
            console.log("*********************************************");
            console.log();
        }
        console.log("============================Scheduling Related Details=====================");
        for (const Schedule of Scheduling.Schedulingdata) {
            console.log(`Address :- ${Schedule.Address}`);
            console.log(`Data Of Interview :- ${Schedule.Date}`);
            console.log(`Time Of Interview :- ${Schedule.TimeSlot}`);
            console.log("----------------------------------------------");
            console.log();
        }
        console.log("============================Interview Process  Related Details=====================");
        for (const Process of InterviewProcess.InterviewProcessdata) {
            console.log(`Round Number :- ${Process.RoundNumber}`);
            console.log(`Test :- ${Process.Test}`);
            console.log(`Time Duration :- ${Process.TimeDuration}`);
            console.log(`Minimum Obtain Marks :-  ${Process.MinimumQualificationMark}`);
            console.log(`FacultyName :-  ${Process.FacultyName}`);
            console.log("++++++++++++++++++++++++++++++++++++++++++++");
            console.log();
        }
    }
}
var re = new Report();
re.InterviewDetails();
re.showReport("Jenil");
re.showReport("Jimit");
re.showReport("Vishw");
