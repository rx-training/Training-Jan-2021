"use strict";
exports.__esModule = true;
exports.InterviewProcess = void 0;
var Interview = [
    { Applicate_name: 'Niraj Sapra' },
    { Applicate_name: 'Parth Shah' },
    { Applicate_name: 'Charmi Tanna' },
    { Applicate_name: 'Priya Maheta' },
    { Applicate_name: 'Disha vane' },
    { Applicate_name: 'Popap jani' },
    { Applicate_name: 'Raj Dabhi' },
    { Applicate_name: 'Nill Maheta' },
    { Applicate_name: 'Naman Radhuvansi' },
    { Applicate_name: 'Niru Mankan' }
];
var InterviewProcess = /** @class */ (function () {
    function InterviewProcess() {
        this.finallist = [];
        this.reportEmp = [
            { Applicate_name: 'Niraj Sapra', Applicate_for_Post: "Apprenties", Emp_salary: 30000 },
            { Applicate_name: 'Popap jani', Applicate_for_Post: "Hr_Assistant", Emp_salary: 25000 },
            { Applicate_name: 'Naman Radhuvansi', Applicate_for_Post: "Devloper", Emp_salary: 20000 },
            { Applicate_name: 'Priya Maheta', Applicate_for_Post: "Grapics Desinger", Emp_salary: 33000 }
        ];
    }
    InterviewProcess.prototype.Scheduling_Interviews = function () {
        console.log("----------------Scheduling Interviews---------------");
        console.log();
        //var Interviewer = Interview.sort(); 
        //console.log(Interviewer);
        var day = 3;
        for (var _i = 0, Interview_1 = Interview; _i < Interview_1.length; _i++) {
            var post = Interview_1[_i];
            console.log("Applicate_Name : " + post.Applicate_name + " and Interview Date : \"" + day + "/05/2021\"");
            day += 1;
        }
        console.log("--------------------------------------------------");
    };
    InterviewProcess.prototype.Hire_Applicate = function () {
        console.log("----------------Hire Applicates---------------");
        console.log();
        this.finallist.push('Niraj Sapra');
        this.finallist.push('Popap jani');
        this.finallist.push('Naman Radhuvansi');
        this.finallist.push('Priya Maheta');
        console.log(this.finallist);
        console.log("--------------------------------------------------");
    };
    return InterviewProcess;
}());
exports.InterviewProcess = InterviewProcess;
