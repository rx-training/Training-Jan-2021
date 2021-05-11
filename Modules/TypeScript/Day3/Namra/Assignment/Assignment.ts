///<reference path="Employee.ts" />
///<reference path="Interview.ts" />

var intrv = new Interview.ScheduleInterview();
console.log(intrv.ScheduleInterview('Hardi','1234567890','Harash','2021-09-10'));
console.log('---------------------------------------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------All Scheduled interviews ---------------------------------------');

Interview.InterviewArray.forEach(element => {
    console.log(element);
});

console.log('---------------------------------------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------Result interviews ----------------------------------------------\n');

console.log(intrv.ResultInterview('Hardi','1234567890',10000,'Harash',true));

console.log('\n---------------------------------------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------All Employees ----------------------------------------------------\n');

EmployeeOperation.EmployeeData.forEach(element => {
    console.log(element);
});

console.log('---------------------------------------------------------------------------------------------------------------------');
console.log('-----------------------------------------------------Deleting Employee------- ---------------------------------------');

var emp = new EmployeeOperation.Employee();
console.log(emp.Delete('Jitendra','9197979797'));

console.log('All Employee Data :');
EmployeeOperation.EmployeeData.forEach(element => {
    console.log(element);
});





