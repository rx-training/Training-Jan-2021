import {Vacancies, ApplicantData, Employee} from "./classes";


var OEmployee = new Employee();
var OApplicant = new ApplicantData();
var OVacancy  = new Vacancies();

OEmployee.GenerateReport();
OEmployee.HiringApplicant();
OEmployee.scheduleInterview();

var results = OEmployee.storingResult();
for(var item of results){
    console.log(item);
}


OApplicant.setApplicantData({
    ApplicantID:5,
    Name:"Mike",
    Age:24,
    Experience:4,
    Address:"Surat",
    VacancyID:3
});
OApplicant.ShowApplicants();

OVacancy.PostAd();
OVacancy.setVacancyData({
    VacancyID:3,
    DateOfInterview:new Date(12-9-2021),
    Post:"PHP Developer", 
    Experience:0, 
    venue:"Ahmedabad",
    TotalSeat:7,
    Salary:8000,
    status:false});
OVacancy.removeVacancy(2);