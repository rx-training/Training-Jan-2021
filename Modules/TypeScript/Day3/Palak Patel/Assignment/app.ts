import {IApplicantData, IVacancy, IEmployee} from "./interfaces";


export var vacancyList:IVacancy[] = [
    {
        VacancyID:1,
        DateOfInterview:new Date(12-12-2020),
        Post:".Net Developer", 
        Experience:2, 
        venue:"Ahmedabad",
        TotalSeat:7,
        Salary:12000,
        Bond:2,
        status:true
    },
    {
        VacancyID:2,
        DateOfInterview:new Date(13-4-2021),
        Post:"React Developer",
        Experience:2,
        venue:"Ahmedabad",
        TotalSeat:7,
        Salary:12000,
        status:false
    }
]

export var ApplicantList:IApplicantData[] = [
    {
        ApplicantID:1,
        Name:"John",
        Age:22,
        Experience:2,
        Address:"Vadodara",
        VacancyID:2
    },
    {
        ApplicantID:2,
        Name:"Max",
        Age:23,
        Experience:2,
        Address:"Vadodara",
        VacancyID:1,
        Result:60
    },
    {
        ApplicantID:3,
        Name:"Perry",
        Age:22,
        Experience:1,
        Address:"Ahmedabad",
        VacancyID:2
    },
    {
        ApplicantID:4,
        Name:"Nick",
        Age:24,
        Experience:3,
        Address:"Surat",
        VacancyID:1,
        Result:50
    }
]
        

export var EmployeeList:IEmployee[] = [
    {
        EmployeeID:1,
        Name:"Luis Vutton",
        JoinedDate:new Date(12-12-2000),
        Department:"HR"
    },
    {
        EmployeeID:2,
        Name:"Prada Perish",
        JoinedDate:new Date(3-8-2001),
        Department:"HR"
    }
]

//Objects

